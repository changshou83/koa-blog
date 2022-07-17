<script lang='ts' setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <router-view key="ManageView" v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang='' scoped>
</style>
