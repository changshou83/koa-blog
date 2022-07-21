import {
  BookOutlined,
  ReadOutlined,
  ScheduleOutlined,
  SisternodeOutlined,
  LikeOutlined,
} from '@ant-design/icons-vue';
import { h } from 'vue';
import { routeNameToPage } from '@/utils/route/routeNameToPage';
import { routePathToPage } from '@/utils/route/routePathToPage';
import { useUserStore } from '@/store/user'

export const showIndexConfig = {
  avatar: {
    src: new URL(`../../assets/imgs/avatar.png`, import.meta.url).href,
  },
  title: (useUserStore()).username,
  subTitle: '怕是寄了',
  hideList: ['ShowBlog'],
  buttonGroup: [
    {
      text: '日志',
      icon: h(BookOutlined),
      handle: routePathToPage('/show/blogs/1'),
    },
    {
      text: '读书',
      icon: h(ReadOutlined),
      handle: routePathToPage('/show/books/1'),
    },
    {
      text: '项目',
      icon: h(ScheduleOutlined),
      handle: routeNameToPage('ShowProject'),
    },
    {
      text: '归档',
      icon: h(SisternodeOutlined),
      handle: routeNameToPage('ShowFile'),
    },
    {
      text: '赞助列表',
      icon: h(LikeOutlined),
      handle: routeNameToPage('ShowList'),
    },
  ],
};
