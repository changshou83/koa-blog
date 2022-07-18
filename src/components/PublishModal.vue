<script lang='ts' setup>
import { Modal, Radio, RadioGroup, Form, UploadProps, UploadChangeParam, Upload, UploadFile } from 'ant-design-vue';
import { EditOutlined, ContainerOutlined, UploadOutlined } from '@ant-design/icons-vue';

import type { Rule } from 'ant-design-vue/es/form';
import { EditorForm } from '@/types'

// 表单数据处理
const [formState, setFormState] = useState<EditorForm>({
  title: '',
  intro: '',
  articleType: 'blog',
  headImg: '',
});
/* 表单验证 */
const rules = ref<Record<string, Rule[]>>({
  title: [{
    required: true,
    message: "标题为必填"
  }],
  intro: [{
    required: true,
    message: "简介为必填"
  }],
})
const { validateInfos } = Form.useForm(formState, rules)
const canPublish = computed(() => {
  const status = [
    validateInfos.title.validateStatus,
    validateInfos.intro.validateStatus,
  ].every(status => status === 'success')

  return status
})
/* 暴露属性 */
const [visible, setVisible] = useState<boolean>(false)
defineExpose({
  setVisible,
  setFormState
})
defineProps<{
  loading: boolean
}>()

/* 提交表单 */
const emit = defineEmits<{
  (e: 'publish', state: EditorForm): void
}>()
const submit = (state: EditorForm) => emit('publish', toRaw(state));

/* 上传图片到七牛云 */
const Message = useMessage();
const fileList = ref<UploadProps['fileList']>([]);
const uploaded = ref(false);

const beforeUpload: UploadProps['beforeUpload'] = file => {
  // 限制大小
  const isLt2M = file.size! < 2 * 1024 * 1024;
  if (!isLt2M) {
    Message.error({
      message: "上传图片失败",
      description: "上传头像图片大小不能超过 2MB!"
    });
  }
  if(!isLt2M) return Promise.reject();

  // 加水印，这水印加了但是看不着，调整一下图片样式
  return new Promise((resolve) => addWaterMark(file, resolve as BlobCallback));
}

const onFilesAdded = (info: UploadChangeParam) => {
  if (info.file.status !== 'uploading') {
    fileList.value = [info.file];
  }
};
const onFilesDeleted = (file: UploadFile) => {
  return false;
}
const uploadToQiNiu = (options: any) => {
  const { file, onSuccess, onError } = options

  uploadImage(file)
    .then((url: string) => {
      Message.success({
        message: "上传图片成功",
      })
      onSuccess();
      uploaded.value = true;
      formState.value.headImg = url;
    })
    .catch((err) => {
      Message.error({
        message: "上传图片失败",
        description: err.reason || '未知错误'
      })
      onError();
    })
}
</script>

<template>
  <modal
    title="文章发布设置"
    :ok-button-props="{ loading, disabled: !canPublish }"
    v-model:visible="visible"
    @ok="submit(formState)"
  >
      <a-form
        :model="formState"
      >
        <a-form-item label="标题" v-bind="validateInfos.title">
          <a-input v-model:value="formState.title" placeholder="标题">
            <template #prefix><EditOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item label="简介" v-bind="validateInfos.intro">
          <a-input v-model:value="formState.intro" placeholder="简介">
            <template #prefix><ContainerOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item name="upload" label="文章头图" extra="一旦上传，只可在更新时可修改">
          <Upload
            accept="image/png, image/jpeg"
            list-type="picture"
            v-model:fileList="fileList"
            :beforeUpload="beforeUpload"
            :customRequest="uploadToQiNiu"
            @change="onFilesAdded"
            @remove="onFilesDeleted"
          >
            <a-button :disabled="uploaded">
              <template #icon><UploadOutlined /></template>
              点击上传
            </a-button>
          </Upload>
        </a-form-item>
        <a-form-item>
          类型：
          <radio-group v-model:value="formState.articleType">
            <radio value="blog">日志</radio>
            <radio value="book">读书</radio>
          </radio-group>
        </a-form-item>
      </a-form>
    </modal>
</template>

<style scoped>
</style>
