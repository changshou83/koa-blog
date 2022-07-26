import routes from './routes';
import { AppRouteMetaConfig } from '@/types';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useUserStore } from '@/store/user';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes as RouteRecordRaw[]
});

router.beforeEach((to, from, next) => {
  const meta = to.meta as AppRouteMetaConfig;
  document.title = meta.title ? `${meta.title}` : 'koa-blog';

  const { token } = useUserStore();
  if (meta && meta.auth && !token) {
    useMessage().warning({ message: '无此权限,请先登录' });
    next('/manage/login');
  } else {
    next();
  }
});

export default router;
