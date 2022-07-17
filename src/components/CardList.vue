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
      v-for="record of cardRecords"
      :key="record.id"
      @click="checkDetail(record.id!)"
    >
      <template #cover>
        <img class="headImg" alt="文章头图" :src="record.headImg" />
      </template>
      <a-card-meta>
        <template #title><span  class="meta-title">{{record.title}}</span></template>
        <template #description>{{record.intro}}</template>
      </a-card-meta>
    </a-card>
  </section>
</template>

<style scoped>
.card-list {
  padding-bottom: 20px;
}

.card {
  display: flex;
  flex-direction: row;
  margin: 20px auto;
  max-width: 800px;
  width: 100%;
}
/* card hover */
.card:hover .headImg {
  filter: brightness(80%);
  transform: scale(1.1);
  transition: all .1s linear;
}
.card:hover :deep(.ant-card-body) {
  width: 58%;
  margin-left: -8px;
  transition: all .1s linear;
}
/* card content */
:deep(.ant-card-cover) {
  flex: 1;
  overflow: hidden;
}
:deep(.ant-card-body) {
  width: 55%;
  transition: all .1s linear;
}
.headImg {
  object-fit: cover;
  width: 100%;
  height: 200px;
  transition: all .1s linear;
}
.meta-title {
  font-size: 2em;
  font-weight: bold;
}
</style>
