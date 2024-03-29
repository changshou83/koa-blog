import { Plugin, App } from 'vue';
import router from '@/routes/index';
import store from '@/store/index';
import i18n from '@/locales/index';
import {
  Tag,
  Card,
  Form,
  Input,
  Avatar,
  Button,
  Timeline,
  Pagination
} from 'ant-design-vue';

const plugins: Plugin[] = [router, store, i18n];
const componentsPlugins: Plugin[] = [
  Tag,
  Card,
  Form,
  Input,
  Avatar,
  Button,
  Timeline,
  Pagination
];

/**
 * 为App注册插件
 */
export const usePlugin = (app: App) =>
  [...plugins, ...componentsPlugins].forEach(app.use, app);
