<script lang='ts' setup>
import { watchEffect } from 'vue';

import { useWindowScrollTo } from '@/utils/windowScrollTo';
import { routeParamsChange } from '@/utils/route/routeParamsChange';
import { useLinkedRouteParam } from '@/composables/utils/useLinkedRouteParam';

interface PaginationProp {
  total?: number,
  pageSize?: number,
  needScroll?: boolean
}
const { total = 0, pageSize = 5, needScroll = true } = defineProps<PaginationProp>()
let curr = useLinkedRouteParam('pageNum', true)

const emits = defineEmits<{
  (e: 'change', value: number): void
}>()
watchEffect(() => {
  emits('change', curr.value as number)
  if(needScroll) useWindowScrollTo({top: 0}, 'auto')
})

const pageNumChange = routeParamsChange('pageNum')
const onPageChange = (targetPage: number) => pageNumChange(targetPage)
</script>

<template>
  <a-pagination
      class="pagination"
      :total="total"
      :default-page-size="pageSize"
      v-model:current="curr"
      simple
      hideOnSinglePage
      @change="onPageChange"
    />
</template>

<style scoped>
.pagination {
  text-align: center;
  padding-bottom: 30px;
}
</style>
