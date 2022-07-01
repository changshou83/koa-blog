import { AppRouteRecordRaw } from '@/types';

const ShowRouter: AppRouteRecordRaw = {
  path: '/show',
  name: 'Show',
  component: () => import('@/views/show/Index.vue'),
  children: [
    {
      path: '',
      redirect: '/show/blogs/1',
    },
    {
      path: 'blogs/:pageNum',
      name: 'ShowBlog',
      component: () => import('@/views/show/Blog.vue'),
      meta: {
        title: '博客',
        auth: true
      }
    },
    {
      path: 'books/:pageNum',
      name: 'ShowBook',
      component: () => import('@/views/show/Book.vue'),
      meta: {
        title: '读书笔记',
        auth: true
      }
    },
    {
      path: 'projects',
      name: 'ShowProject',
      component: () => import('@/views/show/Project.vue'),
      meta: {
        title: '我的项目',
        auth: true
      }
    },
    {
      path: 'files',
      name: 'ShowFile',
      component: () => import('@/views/show/File.vue'),
      meta: {
        title: '我的归档',
        auth: true
      }
    },
    {
      path: 'lists',
      name: 'ShowList',
      component: () => import('@/views/show/List.vue'),
      meta: {
        title: '赞助列表',
        auth: true
      }
    },
    {
      path: 'about',
      name: 'ShowAbout',
      component: () => import('@/views/show/About.vue'),
      meta: {
        title: '关于我',
        auth: true
      }
    },
  ],
}

export default ShowRouter
