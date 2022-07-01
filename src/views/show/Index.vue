<script lang='ts' setup>
import { RouterView } from 'vue-router';
import ViewHeader from '@/blocks/ViewHeader.vue';
</script>
<script lang="ts">
import { showIndexConfig } from '@/view-provider/show/showIndexView';
import { createButtonGroup } from '@/components/ButtonGroup';
export default {
  components: {
    ButtonGroup: createButtonGroup(showIndexConfig.buttonGroup)
  }
}
</script>

<template>
  <main class="show">
    <view-header v-bind="showIndexConfig">
      <template #footer>
        <button-group></button-group>
      </template>
    </view-header>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style scoped>
.show {
  width: 55vw;
  margin: 30px auto;
}
</style>
