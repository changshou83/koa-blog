import { routePathToPage } from '@/utils/route/routePathToPage';

export const appViewConfig = {
  avatar: {
    src: new URL(`../assets/imgs/avatar.png`, import.meta.url).href,
  },
  tags: [
    {
      color: 'success',
      text: 'vuejs',
    },
    {
      color: 'blue',
      text: 'typescript',
    },
    {
      color: 'cyan',
      text: 'eggjs',
    },
  ],
  menu: [
    {
      text: '首页',
      handle: routePathToPage('/show/blogs/1'),
    },
    {
      text: '创作',
      handle: routePathToPage('/manage/editor'),
    },
    {
      text: '归档',
      handle: routePathToPage('/show/files'),
    },
    {
      text: '赞助列表',
      handle: routePathToPage('/show/lists'),
    },
    {
      text: '关于我',
      handle: routePathToPage('/show/about'),
      type: 'primary',
    },
  ],
};
