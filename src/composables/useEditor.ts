import { FunctionArgs } from '@/types'
import { shallowRef, onBeforeUnmount } from 'vue';

/**
 * 自动销毁的编辑器组件
 * @param beforeDestroy 在被销毁前要执行的函数 
 * @returns 浅响应的编辑器
 */
export const useEditor = (beforeDestroy: FunctionArgs) => {
  const editorRef = shallowRef();
  
  // 组件销毁时，也及时销毁编辑器
  onBeforeUnmount(() => {
    const editor = editorRef.value;
    if (editor == null) return;
    beforeDestroy();
    editor.destroy();
  });

  return editorRef;
};
