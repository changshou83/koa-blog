import { AppRouteRecordRaw } from '@/types';

const template = (key: string) => t(`routes.Show.${key}`)
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
        title: template('Blog'),
        auth: true
      }
    },
    {
      path: 'books/:pageNum',
      name: 'ShowBook',
      component: () => import('@/views/show/Book.vue'),
      meta: {
        title: template('Book'),
        auth: true
      }
    },
    {
      path: 'projects',
      name: 'ShowProject',
      component: () => import('@/views/show/Project.vue'),
      meta: {
        title: template('Projects'),
        auth: true
      }
    },
    {
      path: 'files',
      name: 'ShowFile',
      component: () => import('@/views/show/File.vue'),
      meta: {
        title: template('Archives'),
        auth: true
      }
    },
    {
      path: 'lists',
      name: 'ShowList',
      component: () => import('@/views/show/List.vue'),
      meta: {
        title: template('Sponsors'),
        auth: true
      }
    },
    {
      path: 'about',
      name: 'ShowAbout',
      component: () => import('@/views/show/About.vue'),
      meta: {
        title: template('About'),
        auth: true
      }
    },
  ],
}

export default ShowRouter
