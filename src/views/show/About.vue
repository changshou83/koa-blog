<script lang='ts' setup>
import { Image as CImage } from 'ant-design-vue';
import { coverImg, actions, title, description } from '@/view-provider/show/about';
</script>

<template>
  <main class="about">
    <a-card hoverable>
      <template #cover>
        <c-image alt="cover" :src="coverImg"/>
      </template>
      <template #actions>
        <section v-for="action of actions" :key="action">{{action}}</section>
      </template>
      <a-card-meta :title="title" :description="description" />
    </a-card>
  </main>
</template>

<style scoped>
.about {
  text-align: center;
  padding: 50px;
}
</style>
