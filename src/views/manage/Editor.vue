<script lang='ts' setup>
import '@wangeditor/editor/dist/css/style.css';
import { xssFilterOptions, clearConfirm } from '@/view-provider/manage/editor';

import xss from 'xss';
import { Show, Create, Update } from '@/model/articles';

import PublishModal from '@/components/PublishModal.vue';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';

import { FunctionArgs, EditorForm, ArticleInfo, ResponseConfig } from '@/types';
import type { IDomEditor } from '@wangeditor/editor';

// TODO:从更新直接点到创作会因为组件被缓存导致表单状态不更改,解决方法是在更新页面将创作按钮禁用(×),将创作换个位置

const [draft, stop] = useLocalStorage('draft')
const valueHtml = draft;
const mode = ref('simple')
const Message = useMessage();

// 编辑器Ref和编辑器配置
const beforeEditorDestroy = () => stop()
const editorRef = useEditor(beforeEditorDestroy)
const toolbarConfig = { excludeKeys: ['fullScreen'] }
const editorConfig = { placeholder: '请输入内容...' }

const handleCreated = (editor: IDomEditor) => editorRef.value = editor;
const handleChange = useDebounceFn((editor: IDomEditor) => {
  // 代码块有问题，会一直触发change事件
  valueHtml.value = xss(editor.getHtml(), xssFilterOptions)
  // TODO:草稿缓存提示太烦，看看之后换一种提示方式
  // Message.info({ message: "草稿", description: "已缓存在本地" })
}, 6000)

// 操控 Modal
const modal = ref<InstanceType<typeof PublishModal> | null>(null)
const showModal = () => modal.value?.setVisible(true)
// 更新相关
const { query: { id } } = useRoute()
const isUpdate = Boolean(id)
const submitButtonText = isUpdate ? '更新' : '发布'
// 请求API
const createSubmit = (submitResult: any, msg: string[], onSuccess: FunctionArgs = () => {}): Promise<void> => 
  submitResult
    .then(async (data: ArticleInfo) => {
      Message.success({ message: msg[0] })
      // 防止之后创建新文档时带上之前操作时的内容
      draft.value = '';
      modal.value?.setFormState({
        title: '',
        intro: '',
        articleType: 'blog'
      })
      // 放在改变之后有时候会犯病，比如，创建之后不跳转(url变了但是组件不变，控制台还不报错，无语)
      // 用 await 就好了
      await routePathToPage(`/details/${data.id}`)()
    })
    .catch((err: ResponseConfig) => {
      Message.error({
        message: msg[1],
        description: err?.reason || '未知错误'
      })
    })
    .finally(() => {
      modal.value?.setVisible(false)
    })

let submit = null;
if(isUpdate) submit = (state: EditorForm) => 
  createSubmit(Update(Number(id), {
    ...state,
    content: valueHtml.value
  }), ['更新成功', '更新失败'])
else submit = (state: EditorForm) => 
  createSubmit(Create({
    ...state,
    content: valueHtml.value
  }), ['发布成功', '发布失败'])

const [loading, loadingPublish] = useLoading(submit)
const publish = (state: EditorForm) => loadingPublish(state)

const clear = () => clearConfirm(valueHtml);

// 当更新时，提前准备被更改的内容
if(isUpdate) {
  onMounted(() => {
    Show(Number(id))
      .then((data: ArticleInfo | undefined) => {
        if(data) {
          valueHtml.value = data.content!
          modal.value?.setFormState({
            title: data!.title,
            intro: data!.intro,
            articleType: data!.articleType
          })
        }
      })
      .catch((err) => {
        Message.error({
          message: '文章内容获取失败',
          description: err.data || err.reason || '未知错误'
        })
      })
  })
}
</script>

<template>
  <main class="editor">
    <div style="border-bottom: 1px solid #e8e8e8;">
      <Toolbar
        class="editor-toolbar"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
    </div>
    <div class="content">
      <div class="editor-container">
        <Editor
          class="editor-text-area"
          v-model="valueHtml"
          :defaultConfig="editorConfig"
          :mode="mode"
          @onCreated="handleCreated"
          @onChange="handleChange"
        />
      </div>
    </div>
    <section class="actions">
      <a-button type="primary" @click="showModal">{{ submitButtonText }}</a-button>
      <a-button type="danger" @click="clear">清空</a-button>
    </section>
    <publish-modal ref="modal" @publish="publish" :loading="loading"/>
  </main>
</template>

<style scoped>
.editor {
  background-color: #fff;
  height: 100%;
  overflow: hidden;
  color: #333;
}
.editor-toolbar {
  width: 1350px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.content {
  height: calc(100% - 40px);
  background-color: rgb(245, 245, 245);
  overflow-y: auto;
  position: relative;
}
.editor-container {
  width: 850px;
  margin: 30px auto 50px auto;
  background-color: #fff;
  padding: 50px;
  padding-top: 20px;
  border: 1px solid #e8e8e8;
  box-shadow: 0 2px 10px rgb(0 0 0 / 12%);
}
.editor-text-area {
  min-height: 900px;
  margin-top: 20px;
}
.actions {
  background-color: rgb(245, 245, 245);
  text-align: center;
  padding: 8px;
}
.actions > * {
  margin: 40px;
  margin-top: 0;
  border-radius: 8px;
  transform: scale(120%);
}
</style>
