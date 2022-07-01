<script lang='ts' setup>
import { Row, Col as CCol } from 'ant-design-vue';
import { list } from '@/view-provider/show/list';
</script>

<template>
  <main>
    <row :gutter="16" v-for="row of list" class="row">
      <c-col :span="8" v-for="record of row" :key="record.id">
        <a-card :title="record.name" hoverable :bordered="false">
          <p>{{record.content}}</p>
        </a-card>
      </c-col>
    </row>
  </main>
</template>

<style scoped>
.row {
  margin: 20px 0;
}
</style>
