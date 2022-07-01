import keymaster from 'keymaster';
import { FunctionArgs } from '@/types'
import { onBeforeUnmount, onMounted } from 'vue';

const bindKeyHandler = (fn: FunctionArgs) => () => {
  fn();
  return false; // 阻止浏览器默认事件
};

const shortcut = {
  bind: (seed: string, func: FunctionArgs) =>
    keymaster(seed, bindKeyHandler(func)),
  ...keymaster,
};

/**
 * 设置快捷键
 * @param seed 快捷键组合
 * @param handler 对应的处理函数
 */
export const useShortcut = (seed: string, handler: FunctionArgs) => {
  onMounted(() => {
    shortcut.bind(seed, handler);
  });
  onBeforeUnmount(() => {
    shortcut.unbind(seed);
  });
};
