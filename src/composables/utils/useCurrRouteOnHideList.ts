import { computed } from 'vue';
import { useRoute, RouteRecordName } from 'vue-router';

/**
 * 判断当前路由是否在黑名单中，用于在某些页面不显示某些东西
 * @param hideList 路由黑名单
 * @returns
 */
export const useCurrRouteOnHideList = (hideList: RouteRecordName[] = []) => {
  const currRoute = useRoute();
  const status = computed(() => hideList.includes(currRoute.name!));

  return status;
};
