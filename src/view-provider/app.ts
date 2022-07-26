import { useUserStore } from '@/store/user';
import { routePathToPage } from '@/utils/route/routePathToPage';

export const appViewConfig = {
  avatar: {
    src: new URL(`../assets/imgs/avatar.png`, import.meta.url).href
  },
  tags: [
    {
      color: 'success',
      text: 'vuejs'
    },
    {
      color: 'blue',
      text: 'typescript'
    },
    {
      color: 'cyan',
      text: 'koa'
    }
  ],
  menu: [
    {
      text: 'Home',
      handle: routePathToPage('/show/blogs/1')
    },
    {
      text: 'Manage',
      handle: routePathToPage('/manage/articles/1')
    },
    {
      text: 'Create',
      handle: routePathToPage('/manage/editor')
    },
    {
      text: 'About',
      handle: routePathToPage('/show/about'),
      type: 'primary'
    },
    {
      text: 'Logout',
      type: 'danger',
      handle: () => {
        const user = useUserStore();
        const message = useMessage();
        const template = (key: string) =>
          t(`pages.Manage.Login.Message.Logout.${key}`);
        if (user.token) {
          user.logout();
          message.success({
            message: template('SuccessText')
          });
          routePathToPage('/manage/login')();
        } else {
          message.error({
            message: template('ErrorText.message')
          });
        }
      }
    }
  ]
};
