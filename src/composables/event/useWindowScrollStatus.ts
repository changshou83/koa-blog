import { ref } from 'vue';
import { useWindowEvent } from '@/composables/event/useWindowEvent';

/**
 * 判断页面是否已滚动
 * @returns 
 */
export const useWindowScrollStatus = () => {
  const status = ref(false);
  
  useWindowEvent('scroll', () => {
    const { scrollTop } = document.documentElement;
    status.value = scrollTop > 0 ? true : false;
  });

  return status;
};
