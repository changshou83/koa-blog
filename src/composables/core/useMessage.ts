import { useNotice } from '../useNotice';

/**
 * 对useNotice进行封装后的Message对象
 */
export function useMessage() {
  const Message = {
    success: useNotice('success'),
    info: useNotice('info'),
    warning: useNotice('warning'),
    error: useNotice('error')
  };

  return Message;
}
