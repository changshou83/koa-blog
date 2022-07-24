<script lang='ts' setup>
import { blogViewConfig } from '@/view-provider/show/blog';

import { Index } from '@/model/articles';

import CardList from '@/components/CardList.vue';
import CPagination from '@/components/Pagination.vue';
import { useUserStore } from '@/store/user';

const { cardRecords, total, limit } = blogViewConfig
const pageNum = useLinkedRouteParam('pageNum', true)
const user = useUserStore()
const template = (key: string) => t(`pages.Show.${key}`)
watchEffect(() => {
  Index({ page: pageNum.value as number, limit: limit.value || 1 , type: 'blog', userId: user.id }, 300)
    .then((data) => {
      if(data) {
        cardRecords.value = data.rows
        total.value = data.count
      }
    })
    .catch((err) => {
      useMessage().info({
        message: template('Message.ErrorText.message'),
        description: err.data || err.reason || template('Message.ErrorText.description')
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
