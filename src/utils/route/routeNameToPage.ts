import router from '@/routes/index';

/**
 * 根据路由名称进行跳转
 * @param routeName 目标路由的名称
 */
export const routeNameToPage = (routeName: string) =>
  router.push.bind(router, { name: routeName });
