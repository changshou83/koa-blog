<script lang='ts' setup>
import { ref, toRaw, computed } from 'vue'
import { useState } from '@/composables/core/useState';

import { Modal, Radio, RadioGroup, Form } from 'ant-design-vue';
import { EditOutlined, ContainerOutlined } from '@ant-design/icons-vue';

import type { Rule } from 'ant-design-vue/es/form';
import { EditorForm } from '@/types'

// 表单数据处理
const [formState, setFormState] = useState<EditorForm>({
  title: '',
  intro: '',
  articleType: 'blog'
});

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
    validateInfos.intro.validateStatus
  ].every(status => status === 'success')

  return status
})

const [visible, setVisible] = useState<boolean>(false)
defineExpose({
  setVisible,
  setFormState
})
defineProps<{
  loading: boolean
}>()

// 提交处理
const emit = defineEmits<{
  (e: 'publish', state: EditorForm): void
}>()
const submit = (state: EditorForm) => emit('publish', toRaw(state));
</script>

<template>
  <modal
    title="文章发布设置"
    :ok-button-props="{ loading, disabled: !canPublish }"
    v-model:visible="visible"
    @ok="submit(formState)"
  >
      <a-form
        layout="vertical"
        :model="formState"
      >
        <a-form-item v-bind="validateInfos.title">
          <a-input v-model:value="formState.title" placeholder="标题">
            <template #prefix><EditOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item v-bind="validateInfos.intro">
          <a-input v-model:value="formState.intro" placeholder="简介">
            <template #prefix><ContainerOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
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

<style lang='' scoped>
</style>
