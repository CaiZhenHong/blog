<!-- 
     @desc 主页文章列表 组件

     @author CZH996.TOP

     @date 2021年4月9日

     @example 
      <articles></articles>
 -->
<template>
  <div>
    <div
      class="article"
      v-for="(articleItem, index) in articleList"
      :key="index"
    >
      <article-item :articleItem="articleItem"></article-item>
    </div>
  </div>
</template> 

<script>
import ArticleItem from './ArticleItem';
import { getArticleInfo } from '@/services/article';

export default {
  components: { ArticleItem },

  data() {
    return {
      articleList: [],
    };
  },

  created() {
    this.$nextTick(() => {
      getArticleInfo().then((d) => {
        this.articleList = d.data;
      });
    });
  },
};
</script>


<style scoped lang='scss'>
@import '@app';
@import '@theme';

.article {
  @include _box(#fff);
  max-width: 1400px;
  border-bottom: none;
}
</style>