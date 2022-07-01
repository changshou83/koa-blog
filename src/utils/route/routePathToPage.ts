import router from '@/routes/index';

/**
 * 通过路径跳转
 * @param routePath 路径
 * @param options 可以带一些参数，比如 param
 */
export const routePathToPage = (routePath: string, options?: any) =>
  router.push.bind(router, { path: routePath, ...options });
