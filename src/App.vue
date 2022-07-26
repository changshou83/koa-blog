<script setup lang="ts">
import { RouterView } from 'vue-router';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import enUS from 'ant-design-vue/es/locale/en_US';
import { UpOutlined } from '@ant-design/icons-vue';
import { ConfigProvider, BackTop } from 'ant-design-vue';

import Header from '@/components/Header.vue';
import { appViewConfig } from '@/view-provider/app';
import { useLangStore } from './store/lang';

const lang = useLangStore();
</script>

<template>
  <config-provider :locale="lang.curr === 'zh-CN' ? zhCN : enUS">
    <Header v-bind="appViewConfig"/>
    <back-top class="back-top"><up-outlined /></back-top>
    <router-view key="AppView"/>
  </config-provider>
</template>

<style>
@import url('./style.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
