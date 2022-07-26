import { ref } from 'vue';
import { useWindowEvent } from '@/composables/event/useWindowEvent';

/**
 * 判断页面是否已滚动
 * @returns
 */
export const useWindowScrollStatus = (limit = 0) => {
  const status = ref(false);

  useWindowEvent('scroll', () => {
    const { scrollTop } = document.documentElement;
    status.value = scrollTop > limit ? true : false;
  });

  return status;
};
