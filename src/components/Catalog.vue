<script lang='ts' setup>
defineProps<{content: string | undefined}>()
</script>

<template>
  <sidebar>catalog</sidebar>
</template>

<style scoped>
sidebar {
  position: absolute;
  background-color: #eceff1;
  right: 0;
}
</style>
