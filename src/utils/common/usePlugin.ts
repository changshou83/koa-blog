import { createPinia } from 'pinia';
import { Plugin, App } from 'vue';
import router from '@/routes/index';
import {
  Tag,
  Card,
  Form,
  Input,
  Avatar,
  Button,
  Timeline,
  Pagination,
} from 'ant-design-vue';

const plugins: Plugin[] = [router, createPinia()];
const componentsPlugins: Plugin[] = [
  Tag,
  Card,
  Form,
  Input,
  Avatar,
  Button,
  Timeline,
  Pagination,
];

/**
 * 为App注册插件
 */
export const usePlugin = (app: App) =>
  [...plugins, ...componentsPlugins].forEach(app.use, app);
