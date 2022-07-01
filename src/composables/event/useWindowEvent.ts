import { onUnmounted } from 'vue';

/**
 * 自动卸载的事件监听器
 * @param eventType 事件类型
 * @param callback 要执行的回调函数
 */
export const useWindowEvent = (eventType: string, callback: EventListener) => {
  window.addEventListener(eventType, callback);
  onUnmounted(() => {
    window.removeEventListener(eventType, callback);
  });
};
