import { reactive } from 'vue';
import { TablePaginationConfig } from 'ant-design-vue';
import { ArticleType } from '@/types';

export const colorMap: Record<ArticleType, string> = {
  book: 'volcano',
  blog: 'geekblue',
};
export const paginationConfig = reactive<TablePaginationConfig>({
  pageSize: 5,
});
export const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'CreatedAt',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'UpdatedAt',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
  },
  {
    title: 'Type',
    key: 'articleType',
    dataIndex: 'articleType',
  },
  {
    title: 'Edit',
    key: 'edit',
  },
];


