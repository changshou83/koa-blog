<script lang='ts' setup>
import { Index, Delete } from '@/model/articles';
import { Ref } from 'vue';
import { columns, colorMap, paginationConfig } from '@/view-provider/manage/article';

import { Table as CTable, TablePaginationConfig } from 'ant-design-vue';
import { ArticleInfo, ArticleType } from '@/types';

const Message = useMessage();

// route与分页器联动
const current = useLinkedRouteParam<number>('page', true)
const pageNumChange = routeParamsChange('page')
const changeHandler = ({ current }: TablePaginationConfig) => pageNumChange(current)

const getTypeColor = (type: ArticleType) => colorMap[type!] || '#007A78'
const type = (articleType: any[] | string) => Array.isArray(articleType) ? articleType : [articleType]

// 处理文章列表数据
let source: Ref<ArticleInfo[]> = ref([])
const [loading, getList] = useLoading(() => 
  Index({ page: current.value, limit: paginationConfig?.pageSize || 1 }, 300)
    .then((data) => {
      if(data) {
        source.value = data.rows!;
        paginationConfig.total = data!.count;
      }
    })
    .catch((err) => {
      Message.error({
        message: '文章列表获取失败',
        description: err.reason || '未知错误'
      })
    })
)

watchEffect(() => getList(), {
  flush: 'post'
})

const destroy = (id: number) => 
  Delete(Number(id))
    .then(() => {
      getList()
      Message.success({
        message: '删除文章成功'
      })
    })
    .catch((err) => {
      Message.error({
        message: '删除文章失败',
        description: err.reason || '未知错误'
      })
    })
const check = (id: number) => routePathToPage(`/details/${id}`)()
const update = (id: number) => routePathToPage(`/manage/editor`, { query: { id } })()
</script>

<template>
  <main class="articles">
    <c-table
      bordered
      :columns="columns"
      :data-source="source"
      :pagination="{ ...paginationConfig, current }"
      :loading="loading"
      @change="changeHandler"
      row-key="id"
    >
      <template #headerCell="{ column }">
          <span>{{column.title}}</span>
      </template>

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'title'">
          <a>
            {{ record.title }}
          </a>
        </template>
        <template v-else-if="column.key === 'articleType'">
          <span>
            <a-tag
              v-for="tag in type(record.articleType)"
              :key="tag"
              :color="getTypeColor(tag)"
            >
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
        </template>
        <template v-else-if="column.key === 'edit'">
          <a-button class="mx-1" type="danger" @click="destroy(record.id)">删除</a-button>
          <a-button class="mx-1" type="primary" @click="update(record.id)">更新</a-button>
          <a-button class="mx-1" @click="check(record.id)">查看</a-button>
        </template>
      </template>
    </c-table>
  </main>
</template>

<style scoped>
.articles {
  margin: 10px;
  padding: 10px;
  /* border-radius: 8px;
  border: 2px solid #cfd8dc; */
}
</style>
