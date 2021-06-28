 <!--
 * @description 文章查看
 * @Date 2021年6月9日
 -->
<template>
  <div class="article" v-if="article">
    <top-bar class="article-top-bar" />

    <div class="content">
      <div class="title">{{ article.title }}</div>
      <div class="info">
        <div class="time">文章发布时间: {{ article.time }}</div>

        <div class="tag-warpper">
          <div class="tag1">一级分类：{{ article.tag1 }}</div>
          <div class="tag2">二级分类：{{ article.tag2 }}</div>
        </div>
      </div>

      <div class="main-content" v-html="content" v-highlight></div>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/content/topBar/TopBar.vue';

import marked from 'marked';
import { get_article } from '@/services/article';
import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers('user');

export default {
  components: {
    TopBar,
  },

  data: function () {
    return {
      article: null,
    };
  },

  computed: {
    ...mapState(['email']),

    content: function () {
      return marked(this.article.content);
    },
  },

  beforeRouteEnter: function (to, from, next) {
    from;
    const { email, id } = to.query;
    next((vm) => {
      get_article({ email, id }).then(({ data }) => {
        vm.article = data;
      });
    });
  },
};
</script>

<style lang="scss" scoped>
@import '@app';
@import '@theme';

.article {
  width: 100%;

  background: #fafafa;
  margin: 0 auto;
}

.article-top-bar {
  padding: 0 180px 0 140px;
  border-bottom: 1px solid $bdc;
}

.content {
  width: 1000px;

  padding: 36px;
  margin: 0 auto;
  margin-top: 24px;

  @include _box();
  box-shadow: 0 0 10px 0 $bdc;

  .title {
    color: #333;

    line-height: 45px;
    font-size: 30px;

    letter-spacing: 1px;
  }

  .info {
    background: #f8f8f8;
    margin-top: 36px;
  }
  .time {
    font-size: 13px;
    padding: 24px 0 12px 24px;
  }
  .tag-warpper {
    display: flex;
    font-size: 13px;
    padding: 24px;
    padding-top: 12px;
    color: #333;
  }
  .tag2 {
    margin-left: 24px;
  }
  .main-content {
    margin-top: 48px;
  }
}
</style>