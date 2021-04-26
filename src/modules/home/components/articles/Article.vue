<!-- 
     @desc 主页文章列表 组件

     @author CZH996.TOP

     @date 2021年4月9日

     @example 
      <articles></articles>
 -->
<template>
  <div v-if="articleList">
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
import { getAriticles } from '@/services/article';
export default {
  components: { ArticleItem },

  data() {
    return {
      articleList: [],
    };
  },

  mounted() {
    getAriticles({ email: this.email }).then((data) => {
      this.articleList = data.data;
    });
  },

  computed: {
    email() {
      return this.$store.state.email;
    },
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