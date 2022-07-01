import { ref, Ref } from 'vue';
import { FunctionArgs } from '@/types'

/**
 * 给请求加上加载效果
 * @param req 真正执行的函数
 * @returns 一个数组，第一个为给组件绑定用的响应式值，第二个为包装之后的函数
 */
export const useLoading = <Arg extends any = any, Return extends any = any>(
  req: FunctionArgs<Arg[], Promise<Return>>
) => {
  const loading = ref<boolean>(false);
  const wrapReq = async (...args: Arg[]) => {
    loading.value = true;
    try {
      const data = await req(...args);
      loading.value = false;
      return await Promise.resolve(data);
    } catch (reason) {
      loading.value = false;
      return await Promise.reject(reason);
    }
  };
  return [loading, wrapReq] as [Ref<boolean>, FunctionArgs<Arg[], Promise<Return>>];
};
