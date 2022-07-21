<script lang='ts' setup>
import { bookViewConfig } from '@/view-provider/show/book';

import { Index } from '@/model/articles';

import CardList from '@/components/CardList.vue';
import CPagination from '@/components/Pagination.vue';
import { useUserStore } from '@/store/user';

const { cardRecords, total, limit } = bookViewConfig;
const pageNum = useLinkedRouteParam('pageNum', true);
const user = useUserStore();
watchEffect(() => {
  Index({ page: pageNum.value as number, limit: limit.value || 1, type: 'book', userId: user.id }, 300)
    .then((data) => {
      if(data) {
        cardRecords.value = data.rows
        total.value = data.count
      }
    })
    .catch((err) => {
      useMessage().info({
        message: '获取失败',
        description: err.data || err.reason || '未知错误'
      })
    })
}, {
  flush: 'post'
})

const checkDetail = (id: number) => routePathToPage(`/details/${id}`)()
</script>

<template>
  <main>
    <card-list :cardRecords="cardRecords" @checkDetail="checkDetail"></card-list>
    <c-pagination :total="total" :pageSize="limit"/>
  </main>
</template>

<style scoped>
</style>
