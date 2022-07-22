<script lang='ts' setup>
import { Show } from '@/model/articles';

import Catalog from "@/components/Catalog.vue";
import { Alert, Skeleton } from 'ant-design-vue';
import { CommentOutlined } from '@ant-design/icons-vue';

// 加载CSS文件
import '@wangeditor/editor/dist/css/style.css';
import { ArticleInfo, CatalogNode } from '@/types';

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
const catalog = ref<CatalogNode[]>([]);
const showCatalog = ref<boolean>(true);

const [loading, getArticleInfo] = useLoading(() =>
  Show(Number(id.value), 1500)
    .then((data) => {
      if(data) {
        /* 自动生成文章目录 */
        const { catalogNodes, htmlText } = generateCatalog(data.content);
        catalog.value = catalogNodes;
        article.value = {
          ...data,
          content: htmlText
        }
        if(catalogNodes.length === 0) showCatalog.value = false;
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
/* 在复制的内容后面加上版权信息 */
useWindowEvent('copy', (event) => addCopyrightInfo(event as ClipboardEvent))
</script>

<template>
  <main class="article">
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
    <main class="list-container" v-if="showCatalog">
      <div class="catalog-title">目录</div>
      <ul class="catalog-list">
        <Catalog v-for="node in catalog" :catalogNode="node" :loading="loading"/>
      </ul>
    </main>
  </main>
</template>

<style scoped>
/* 容器 */
.article {
  position: relative;
  padding-bottom: 80px;
}
/* 骨架屏样式 */
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
/* 文章样式 */
.details {
  margin-left: 15vw;
  margin-right: 30vw;
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
/* 侧边栏 */
.list-container {
  position: fixed;
  top: 10%;
  right: 40px;
  transform: translateY(30%);
  width: 220px;
  padding: 10px 0;
  padding-left: 40px;
  margin-top: -10px;
}
.catalog-title {
  font-weight: 500;
  padding: 0.5rem 0;
  margin: 0;
  font-size: 24px;
  line-height: 2rem;
  color: #1d2129;
  border-bottom: 1px solid #c4c5c9;
}
.catalog-list {
  max-height: 400px;
  overflow: auto;
  position: relative;
  line-height: 22px;
  padding: 0 0 12px;
  margin: 0;
}
</style>
