<script lang='ts' setup>
import { PageHeader } from 'ant-design-vue';
import { LeftSquareOutlined } from '@ant-design/icons-vue';

import { Avatar, ButtonGroupItem } from '@/types'

export interface ViewHeaderConfig {
  avatar: Avatar,
  title: string,
  subTitle: string,
  hideList: string[],
  buttonGroup: ButtonGroupItem[]
}

const { avatar, title, subTitle, hideList } = defineProps<ViewHeaderConfig>()
const defaultAvatar = computed(() => {
  avatar.size = avatar.size || 'large',
  avatar.shape = avatar.shape || 'square'
  
  return avatar
})

const onHideList = useCurrRouteOnHideList(hideList)
const backHome = routePathToPage('/show/blogs/1')
</script>

<template>
  <page-header :title="title" :sub-title="subTitle" :avatar="defaultAvatar">
    <template #extra>
      <transition name="fade" mode="out-in">
        <a-button type="primary" v-if="!onHideList" @click="backHome">
          <LeftSquareOutlined />
          {{$t("components.view-header['Back Home']")}}
        </a-button>
        <div v-else style="display: none;"></div>
      </transition>
    </template>
    <template #footer>
      <slot name="footer" />
    </template>
  </page-header>
</template>

<style scoped>

</style>
