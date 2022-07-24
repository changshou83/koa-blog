<script lang='ts' setup>
import { Modal, Radio, RadioGroup, Form, UploadProps, UploadChangeParam, Upload, UploadFile } from 'ant-design-vue';
import { EditOutlined, ContainerOutlined, UploadOutlined } from '@ant-design/icons-vue';

import type { Rule } from 'ant-design-vue/es/form';
import { EditorForm } from '@/types'

const template = (key: string) => t(`components.publish-modal.${key}`)
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
    message: template('Rules.Title')
  }],
  intro: [{
    required: true,
    message: template('Rules.Intro')
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
      message: template('Message.BeforeUpload.ErrorText.message'),
      description: template('Message.BeforeUpload.ErrorText.description')
    });
  }
  if(!isLt2M) return Promise.reject();

  // 加水印
  return new Promise((resolve) => addWaterMark(file, resolve as BlobCallback));
}

const onFilesAdded = (info: UploadChangeParam) => {
  if (info.file.status !== 'uploading') {
    fileList.value = [info.file];
  }
};
const onFilesDeleted = (file: UploadFile) => {
  // 禁止删除
  return false;
}
const uploadToQiNiu = (options: any) => {
  const { file, onSuccess, onError } = options

  uploadImage(file)
    .then((url: string) => {
      Message.success({
        message: template('Message.UploadImage.SuccessText'),
      })
      onSuccess();
      uploaded.value = true;
      formState.value.headImg = url;
    })
    .catch((err) => {
      Message.error({
        message: template('Message.UploadImage.ErrorText.message'),
        description: err.reason || template('Message.UploadImage.ErrorText.description')
      })
      onError();
    })
}
</script>

<template>
  <modal
    :title="template('Title')"
    :ok-button-props="{ loading, disabled: !canPublish }"
    v-model:visible="visible"
    @ok="submit(formState)"
  >
      <a-form
        :model="formState"
      >
        <a-form-item :label="template('Label.Title')" v-bind="validateInfos.title">
          <a-input v-model:value="formState.title" :placeholder="template('PlaceHolder.Title')">
            <template #prefix><EditOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item :label="template('Label.Intro')" v-bind="validateInfos.intro">
          <a-input v-model:value="formState.intro" :placeholder="template('PlaceHolder.Intro')">
            <template #prefix><ContainerOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item name="upload" :label="template('Label.HeadImage')" :extra="template('ExtraText')">
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
              {{template('ButtonText')}}
            </a-button>
          </Upload>
        </a-form-item>
        <a-form-item :label="template('Label.Type')">
          <radio-group v-model:value="formState.articleType">
            <radio value="blog">{{template('RadioGroup.Blog')}}</radio>
            <radio value="book">{{template('RadioGroup.Book')}}</radio>
          </radio-group>
        </a-form-item>
      </a-form>
    </modal>
</template>

<style scoped>
</style>
