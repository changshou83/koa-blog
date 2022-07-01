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
    title: '标题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: '修改时间',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
  },
  {
    title: '类型',
    key: 'articleType',
    dataIndex: 'articleType',
  },
  {
    title: '编辑',
    key: 'edit',
  },
];


