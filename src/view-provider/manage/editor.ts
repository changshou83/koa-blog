import { createVNode, Ref } from 'vue';
import { Modal } from 'ant-design-vue';
import { useMessage } from '@/composables/core/useMessage';

import { IFilterXSSOptions, escapeAttrValue } from 'xss';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';

export const xssFilterOptions: IFilterXSSOptions = {
  onTag(tag, html) {
    // 处理todolist未被正确转译问题
    const isCheckboxContainer = html.match(/^<div data-w-e-type="todo">/)
    const isCheckbox = html.match(/^<input type="checkbox".*/)
    if(isCheckboxContainer || isCheckbox) return html
  },
  onIgnoreTagAttr(tag, name, value) {
    // 处理文字前景背景色问题
    if (name.slice(0, 6) === "style") return `${name}="${escapeAttrValue(value)}"`
  },
}

export const clearConfirm = (editorContent: Ref<string>) => Modal.confirm({
  title: '清空文档',
  icon: createVNode(ExclamationCircleOutlined),
  content: '清空的文档将不会被恢复',
  okText: '确认',
  cancelText: '取消',
  onOk() {
    editorContent.value = ''
    useMessage().info({ message: "草稿", description: "已清空" })
  },
  onCancel() {
    useMessage().info({ message: "草稿", description: "已撤销清空" })
  }
});
