import ShowRouter from './show';
import ManageRouter from './manage';
import { AppRouteRecordRaw } from '../types/router';

const routes: AppRouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/common/NotFound.vue')
  },
  {
    path: '/',
    redirect: '/show'
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: () => import('@/views/details/index.vue'),
    meta: {
      title: t('routes.Index.Detail'),
      auth: true
    }
  },
  ShowRouter,
  ManageRouter
];

export default routes;
