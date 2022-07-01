<script lang='ts' setup>
import { CardItem } from '@/types';
defineProps<{
  cardRecords: CardItem[]
}>()
const emit = defineEmits<
  (e: 'checkDetail', id: number) => void
>()
const checkDetail = (id: number) => emit('checkDetail', id) 
</script>

<template>
  <section class="card-list">
    <a-card
      class="card"
      hoverable
      :title="record.title"
      :extra="record.createdAt"
      v-for="record of cardRecords"
      :key="record.id"
      @click="checkDetail(record.id)"
    >
      {{record.intro}}
    </a-card>
  </section>
</template>

<style scoped>
.card-list {
  padding-bottom: 20px;
}
.card {
  margin: 20px 0;
}
</style>
