<script lang='ts' setup>
import { CatalogNode } from "@/types";

defineProps<{
  catalogNode: CatalogNode | undefined,
  loading: boolean
}>()

// 目录自动切换到当前阅读的章节
useWindowEvent('scroll', useDebounceFn(catalogTrack, 100));
</script>

<template>
  <li>
    <main class="catalog-container" :name="catalogNode?.id" v-if="!loading">
      <a class="catalog-tag" :href="`#${catalogNode?.id}`">{{catalogNode?.title}}</a>
    </main>
    <ul class="list-wrap">
      <Catalog v-for="node in catalogNode?.children" :catalogNode="node" :loading="loading" v-if="catalogNode?.children"/>
    </ul>
  </li>
</template>

<style scoped>
</style>
