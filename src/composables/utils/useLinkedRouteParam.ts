import { ref, watchEffect } from 'vue';
import type { UnwrapRef, Ref } from 'vue'
import { useRoute } from 'vue-router';
import { MaybeArray } from '@/types';

/**
 * 响应式的路由参数
 * @param paramName 要监听的路由参数名
 * @param isNumber 是否为数字
 * @returns 被监听的路由参数
 */
export const useLinkedRouteParam = <Param extends MaybeArray<string | number>>(
  paramName: string,
  isNumber?: boolean
) => {
  const route = useRoute();
  const currParam = ref<Param>('' as Param);

  watchEffect(() => {
    let param = route.params[paramName];
    currParam.value = (isNumber ? Number(param) : param) as UnwrapRef<Param>;
  });

  return currParam as Ref<Param>;
};
