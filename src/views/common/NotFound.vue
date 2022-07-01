<script lang='ts' setup>
import { Empty as CEmpty } from 'ant-design-vue';
</script>

<template>
  <main class="not-found">
    <c-empty :image="CEmpty.PRESENTED_IMAGE_SIMPLE" description="无此页面"/>
  </main>
</template>

<style scoped>
.not-found {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(130%);
}
</style>

