import { createPinia } from 'pinia';
import { persistState } from '@/store/plugins/persistPiniaState';

const store = createPinia();
store.use(persistState);

export default store;
