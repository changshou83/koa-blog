<script lang='ts' setup>
import { Show } from '@/model/articles';

import { CommentOutlined } from '@ant-design/icons-vue';

// 加载CSS文件
import '@wangeditor/editor/dist/css/style.css';
import { ArticleInfo } from '@/types';

windowScrollTo({ top: 0 }, 'auto')
const Message = useMessage();
const id = useLinkedRouteParam('id');
const article = ref<ArticleInfo>({
  title: '默认标题',
  intro: '默认简介',
  articleType: 'blog'
});

watchEffect(() => {
  Show(Number(id.value))
    .then((data) => {
      if(data) article.value = data
    })
    .catch((err) => {
      Message.error({
        message: '文章内容获取失败',
        // data 是为了兼容 404 错误
        description: err.data || err.reason || '未知错误'
      })
    })
}, {
  flush: 'post'
})
</script>

<template>
  <main class="details w-e-text shadow">
    <h1 class="title">{{article.title}}</h1>
    <a-tag color="#42A5F5" class="type">{{article.articleType}}</a-tag>
    <Alert :message="article.intro" type="info" class="intro" show-icon v-if="article.intro">
      <template #icon><CommentOutlined /></template>
    </Alert>
    <main v-html="article.content" class="content"></main>
  </main>
</template>

<style scoped>
.details {
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  border: 1.5px solid #b0bec5;
  border-radius: 4px;
  position: relative;
  min-height: 100vh;
}
.title {
  text-align: center;
}
.type {
  position: absolute;
  top: 10px;
  right: 10px;
}
.intro {
  margin-bottom: 20px;
}
</style>
