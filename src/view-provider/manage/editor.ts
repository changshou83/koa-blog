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

const template = (key: string) => t(`pages.Manage.Editor.Confirm.${key}`)
export const clearConfirm = (editorContent: Ref<string>) => Modal.confirm({
  title: template('Title'),
  icon: createVNode(ExclamationCircleOutlined),
  content: template('Content'),
  okText: template('OkText'),
  cancelText: template('CancelText'),
  onOk() {
    editorContent.value = ''
    useMessage().info({ message: template('SuccessText.message'), description: template('SuccessText.description') })
  },
  onCancel() {
    useMessage().info({ message: template('ErrorText.message'), description: template('ErrorText.description') })
  }
});
