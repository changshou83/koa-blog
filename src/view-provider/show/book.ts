import { ArticleInfo } from '@/types';
import { ref } from 'vue';

export const bookViewConfig = {
  cardRecords: ref<ArticleInfo[]>([]),
  total: ref(0),
  limit: ref(5)
};
