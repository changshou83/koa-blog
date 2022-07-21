import { AppRouteRecordRaw } from '@/types';

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
        title: '登录'
      }
    },
    {
      path: 'register',
      name: 'ManageRegister',
      component: () => import('@/views/manage/Register.vue'),
      meta: {
        title: '注册'
      }
    },
    {
      path: 'editor',
      name: 'ManageEditor',
      component: () => import('@/views/manage/Editor.vue'),
      meta: {
        title: '编辑文章',
        auth: true
      }
    },
    {
      path: 'articles/:page',
      name: 'ManageArticle',
      component: () => import('@/views/manage/Article.vue'),
      meta: {
        title: '管理文章',
        auth: true
      }
    },
  ],
}

export default ManageRouter;
