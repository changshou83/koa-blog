import router from '@/routes/index';
import type { RouteParamValueRaw } from 'vue-router';

/**
 * 根据路由参数进行跳转
 * @param type 路由参数名
 * @returns 一个可以根据传入的值进行跳转的函数
 */
export const routeParamsChange =
  (type: string) => (value: RouteParamValueRaw) =>
    router.push({
      params: { [type]: value },
    });
