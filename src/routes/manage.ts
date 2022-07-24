import { AppRouteRecordRaw } from '@/types';

const template = (key: string) => t(`routes.Manage.${key}`)
const ManageRouter: AppRouteRecordRaw = {
  path: '/manage',
  name: 'Manage',
  component: () => import('@/views/manage/Index.vue'),
  children: [
    {
      path: '',
      redirect: '/manage/articles/1',
    },
    {
      path: 'login',
      name: 'ManageLogin',
      component: () => import('@/views/manage/Login.vue'),
      meta: {
        title: template('Login')
      }
    },
    {
      path: 'register',
      name: 'ManageRegister',
      component: () => import('@/views/manage/Register.vue'),
      meta: {
        title: template('Register')
      }
    },
    {
      path: 'editor',
      name: 'ManageEditor',
      component: () => import('@/views/manage/Editor.vue'),
      meta: {
        title: template('Edit'),
        auth: true
      }
    },
    {
      path: 'articles/:page',
      name: 'ManageArticle',
      component: () => import('@/views/manage/Article.vue'),
      meta: {
        title: template('Manage'),
        auth: true
      }
    },
  ],
}

export default ManageRouter;
