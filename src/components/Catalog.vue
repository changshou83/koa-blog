<script lang='ts' setup>
import { CatalogNode } from "@/types";

defineProps<{
  catalogNode: CatalogNode | undefined,
  loading: boolean
}>()

// 目录自动切换到当前阅读的章节
useWindowEvent('scroll', useDebounceFn(catalogTrack, 100));
const scrollToTop = (id: string = '') => {
  const heading = document.getElementById(id);
  if(heading) {
    windowScrollTo({
      top: heading.offsetTop - 80
    })
  }
}
</script>

<template>
  <li :class="['item', `d${catalogNode?.tag.slice(1)}`]">
    <main class="catalog-container" :name="catalogNode?.id" v-if="!loading">
      <div class="catalog-tag" @click="scrollToTop(catalogNode?.id)">{{catalogNode?.title}}</div>
    </main>
    <ul class="sub-list">
      <Catalog v-for="node in catalogNode?.children" :catalogNode="node" :loading="loading" v-if="catalogNode?.children"/>
    </ul>
  </li>
</template>

<style scoped>
.item {
  margin: 0;
  padding: 0;
  font-size: 1.167rem;
  line-height: 22px;
  font-weight: 400;
  color: #333;
  list-style: none;
}
.catalog-container {
  display: block;
  position: relative;
  padding: 0;
  padding-left: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.catalog-container:hover {
  cursor: pointer;
}
.catalog-tag {
  padding: 8px;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  color: inherit;
  opacity: 0.3;
  transition: all 0.1s ease-in-out;
}
.catalog-tag:hover {
  background-color: #f7f8fa;
  border-radius: 4px;
}
.sub-list {
  margin: 0;
  padding: 0;
}

.d1 {
  font-weight: 400;
  color: #000;
}
.d1 > .catalog-container {
  margin: 0;
  padding: 0;
  padding-left: 11px;
}
.d2 > .catalog-container {
  padding-left: 26px;
}
.d3 > .catalog-container {
  padding-left: 41px;
}
/* 激活样式 */
.catalog-active > .catalog-tag::before {
  content: '';
  position: absolute;
  top: 4px;
  left: 0;
  margin-top: 7px;
  width: 4px;
  height: 16px;
  background-color: #1e80ff;
  border-radius: 0 4px 4px 0;
}
.catalog-active > .catalog-tag {
  color: #007fff;
  opacity: 0.9;
  transition: all 0.1s ease-in-out;
}
</style>
