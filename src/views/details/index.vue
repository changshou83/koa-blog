<script lang='ts' setup>
import { Show } from '@/model/articles';

import { Alert, Skeleton } from 'ant-design-vue';
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
  articleType: 'blog',
  headImg: 'https://w.wallhaven.cc/full/6o/wallhaven-6o1pl7.jpg',
  content: '默认内容'
});

const [loading, getArticleInfo] = useLoading(() =>
  Show(Number(id.value), 1500)
    .then((data) => {
      if(data) {
        article.value = {
          ...data
        }
      }
    })
    .catch((err) => {
      Message.error({
        message: '文章内容获取失败',
        // data 是为了兼容 404 错误
        description: err.data || err.reason || '未知错误'
      })
    })
)
watchEffect(() => {
  getArticleInfo()
}, {
  flush: 'post'
})
</script>

<template>
  <main class="details w-e-text shadow">
    <Skeleton.Image v-if="loading" class="skeleton-head-img"/>
    <img :src="article.headImg" alt="文章头图" class="head-img" v-if="!loading"/>
    <Skeleton :loading="loading" active :paragraph="{ rows: 4 }">
      <h1 class="title">{{article.title}}</h1>
      <a-tag color="#42A5F5" class="type">{{article.articleType}}</a-tag>
      <Alert :message="article.intro" type="info" class="intro" show-icon v-if="article.intro">
        <template #icon><CommentOutlined /></template>
      </Alert>
      <main v-html="article.content" class="content"></main>
    </Skeleton>
  </main>
</template>

<style scoped>
.details {
  margin: 20px;
  margin-left: 18vw;
  margin-right: 28vw;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  position: relative;
  min-height: 95vh;
}
.head-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 4px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.skeleton-head-img {
  width: 100%;
  height: 250px;
  display: grid;
  place-content: center;
  background-color: rgba(190,190,190,0.2);
  margin-bottom: 20px;
}
:deep(.ant-skeleton-image) {
  background-color: transparent;
}
.title {
  margin-top: 300px;
  height: 80px;
  text-align: left;
  font-weight: bold;
  font-size: 2.8em;
}
.type {
  margin-top: 320px;
  position: absolute;
  top: 10px;
  right: 10px;
}
.intro {
  margin-bottom: 20px;
}

.content {
  padding: 20px;
  font-size: 1.3em;
}
</style>
