import {
  BookOutlined,
  ReadOutlined,
  ScheduleOutlined,
  SisternodeOutlined,
  LikeOutlined
} from '@ant-design/icons-vue';
import { h } from 'vue';
import { routeNameToPage } from '@/utils/route/routeNameToPage';
import { routePathToPage } from '@/utils/route/routePathToPage';
import { useUserStore } from '@/store/user';

export const showIndexConfig = {
  avatar: {
    src: new URL(`../../assets/imgs/avatar.png`, import.meta.url).href
  },
  title: useUserStore().username,
  subTitle: '怕是寄了',
  hideList: ['ShowBlog'],
  buttonGroup: [
    {
      text: 'Logs',
      icon: h(BookOutlined),
      handle: routePathToPage('/show/blogs/1')
    },
    {
      text: 'Books',
      icon: h(ReadOutlined),
      handle: routePathToPage('/show/books/1')
    },
    {
      text: 'Projects',
      icon: h(ScheduleOutlined),
      handle: routeNameToPage('ShowProject')
    },
    {
      text: 'Archives',
      icon: h(SisternodeOutlined),
      handle: routeNameToPage('ShowFile')
    },
    {
      text: 'Sponsors',
      icon: h(LikeOutlined),
      handle: routeNameToPage('ShowList')
    }
  ]
};
