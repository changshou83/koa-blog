<script lang='ts' setup>
import { Avatar, GroupItem } from '@/types';
import { PageHeader } from 'ant-design-vue';

export interface HeaderConfig {
  avatar: Avatar;
  tags: Pick<GroupItem, 'color' | 'text'>[];
  menu: Pick<GroupItem, 'text' | 'type' | 'handle'>[];
}

defineProps<HeaderConfig>()

const isScroll = useWindowScrollStatus()
</script>

<template>
  <page-header class="header" :isScroll="isScroll">
    <template #title>
      <a-avatar :src="avatar.src" :size="avatar.size || 'large'" :shape="avatar.shape || 'square'"></a-avatar>
    </template>
    <template #tags>
      <a-tag v-for="tag of tags" :key="tag.text" :color="tag.color">{{tag.text}}</a-tag>
    </template>
    <template #extra>
      <a-button v-for="item of menu" :key="item.text" :type="item.type" @click="item.handle">{{item.text}}</a-button>
    </template>
  </page-header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 99;
  padding: 10px;
  transition: all 0.3s ease-in-out;
}

.header:hover {
  transition: all 0.3s ease-in-out;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
}

.header[isScroll="true"] {
  transition: all 0.3s ease-in-out;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
}
</style>
