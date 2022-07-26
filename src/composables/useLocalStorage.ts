import { ref, watchEffect } from 'vue';
import type { Ref, WatchStopHandle } from 'vue';

/**
 * 响应式的本地存储
 * @param key 键值
 * @returns 一个数组，第一个为响应式的本地存储值，第二个为停止监听的钩子函数
 */
export const useLocalStorage = (key: string) => {
  const storage = ref(localStorage.getItem(key) || '');
  const stop = watchEffect(() =>
    localStorage.setItem(key, storage.value as string)
  );

  return [storage, stop] as [Ref<string>, WatchStopHandle];
};
