import { FunctionArgs } from '@/types'

/**
 * 防抖处理
 * @param cb 要运行的回调函数
 * @param delay 多少ms之后执行
 * @returns 防抖处理之后的函数
 */
export const useDebounceFn = <T extends FunctionArgs>(
  cb: T,
  delay: number
): T => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined = undefined;
  function wrapper(this: any, ...args: any[]): void {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => cb.apply(this, args), delay);
  }

  return wrapper as any as T;
};
