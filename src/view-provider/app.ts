import { useUserStore } from '@/store/user';
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
      text: '管理',
      handle: routePathToPage('/manage/articles/1'),
    },
    {
      text: '创作',
      handle: routePathToPage('/manage/editor'),
    },
    {
      text: '关于我',
      handle: routePathToPage('/show/about'),
      type: 'primary',
    },
    {
      text: '登出',
      type: 'danger',
      handle: () => {
        const user = useUserStore();
        const message = useMessage();
        if(user.token) {
          user.logout();
          message.success({
            message: '登出成功'
          })
          routePathToPage('/manage/login')();
        } else {
          message.error({
            message: '请先登录'
          })

        }
      }
    },
  ],
};
