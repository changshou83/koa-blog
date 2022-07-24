<script lang='ts' setup>
import { useLangStore } from '@/store/lang';
import { DownOutlined } from '@ant-design/icons-vue';
import { Dropdown, MenuProps, Menu as CMenu, MenuItem as CMenuItem } from 'ant-design-vue'

const changeLang: MenuProps['onClick'] = ({ key }) => {
  const lang = useLangStore()
  if(typeof key === 'string' && lang.langList.includes(key)) lang.change(key)
};
const getPopupContainer = (triggerNode: HTMLElement) => triggerNode.parentElement || document.body;
</script>

<template>
  <dropdown :trigger="['click']" placement="bottomLeft" :getPopupContainer="getPopupContainer">
    <a-button>
      {{$t('components.lang-select.Languages')}}
      <DownOutlined />
    </a-button>
    <template #overlay>
      <c-menu @click="changeLang">
        <c-menu-item key="zh-CN">
          {{$t('components.lang-select.chinese')}}
        </c-menu-item>
        <c-menu-item key="en-US">
          {{$t('components.lang-select.english')}}
        </c-menu-item>
      </c-menu>
    </template>
  </dropdown>
</template>

<style scoped>
</style>
