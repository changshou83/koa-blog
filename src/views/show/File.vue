<script lang='ts' setup>
import { Archive } from '@/model/articles';
import { ref, watchEffect } from 'vue';
import { useMessage } from '@/composables/core/useMessage';
import { getRandomColor } from '@/utils/common/getRandomColor';
import { routePathToPage } from '@/utils/route/routePathToPage';

import { fileRecordConfig } from '@/types';

const cardRecords = ref<fileRecordConfig[] | []>([])

watchEffect(() => {
  Archive()
    .then((data) => {
      if(data) {
        cardRecords.value = data
      }
    })
    .catch((err) => {
      useMessage().info({
        message: '获取失败',
        description: err.reason || '未知错误'
      })
    })
})

const checkDetail = (id: number) => routePathToPage(`/details/${id}`)()
</script>

<template>
  <a-card v-for="month in cardRecords" :title="month.month" :key="month.id">
    <a-timeline>
      <a-timeline-item v-for="day of month.data" :key="day.id" :color="getRandomColor()">
        <a-button @click="checkDetail(day.id)">{{day.createdAt}} —— {{day.title}}</a-button>
      </a-timeline-item>
    </a-timeline>
  </a-card>
</template>

<style lang='' scoped>
</style>
