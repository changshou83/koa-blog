import { createApp } from 'vue';
import App from './App.vue';
import { usePlugin } from '@/utils/common/usePlugin';

import 'uno.css';

const app = createApp(App);
usePlugin(app);
app.mount('#app');
