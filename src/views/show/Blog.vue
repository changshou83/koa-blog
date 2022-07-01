<script lang='ts' setup>
import { blogViewConfig } from '@/view-provider/show/blog';

import { Index } from '@/model/articles';
import { watchEffect } from 'vue';
import { useMessage } from '@/composables/core/useMessage';
import { routePathToPage } from '@/utils/route/routePathToPage';
import { useLinkedRouteParam } from '@/composables/utils/useLinkedRouteParam';

import CardList from '@/blocks/CardList.vue';
import CPagination from '@/components/Pagination.vue';

const { cardRecords, total, limit } = blogViewConfig
const pageNum = useLinkedRouteParam('pageNum', true)
watchEffect(() => {
  Index({ page: pageNum.value as number, limit: limit.value = 1 }, 300)
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
