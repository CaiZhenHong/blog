<template>
  <div class="articles-new">
    <div v-if="articles.length">
      <div
        class="article-new-item"
        v-for="(
          { title, description, cover, time, pageview, comment_count, tag2 },
          index
        ) in articles"
        :key="index"
      >
        <div class="top">
          <div class="comment">
            <div class="iconfont icon__comment comment-icon"></div>
            <div class="comment-count">{{ comment_count }}</div>
          </div>
          <div class="content">
            <div class="title">{{ title }}</div>
            <div class="description">
              {{ description | xss }}
            </div>
          </div>
          <div class="cover" v-if="cover">
            <img class="cover-img" :src="cover" alt="" />
          </div>
        </div>

        <div class="bottom">
          <div class="tag">{{ tag2 }}</div>
          <div class="time">{{ time | date }}</div>
          <div class="page-view">{{ pageview }}</div>
        </div>
      </div>
    </div>

    <div v-else class="iconfont none-articles">
      <div class="icon">&#xe60e;</div>

      <base-button class="text" to="/editor" v-if="editAriticles"
        >开始写第一篇文章</base-button
      >
      <div class="text" v-else>暂无文章</div>
    </div>
  </div>
</template>

<script>
import { BaseButton } from '@/components/base';
import { get_articles_new } from '@/services/article';
import filter from '@/mixins/filter';
import DOMPurify from 'dompurify';
export default {
  components: {
    BaseButton,
  },

  data: function () {
    return {
      articles: [],
    };
  },

  computed: {
    editAriticles: function () {
      return this.$store.state.user.token
        ? this.$route.params.email
          ? false
          : true
        : false;
    },
  },

  created: function () {
    let email = this.$store.state.user.email;
    get_articles_new({ email }).then(({ data }) => {
      this.articles = data;
    });
  },

  mixins: [filter],

  filters: {
    xss: function (value) {
      return DOMPurify.sanitize(value);
    },
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';
.articles-new {
  width: 100%;
  height: 100%;
}
.article-new-item {
  box-sizing: border-box;
  padding: 24px 36px;
  width: 100%;

  border-bottom: 1px solid $bdc;
  &:last-child {
    border-bottom: none;
  }
  .top {
    display: flex;
  }
  .comment {
    height: 50px;
    width: 40px;
    margin-right: 20px;
    background: #f0f0f0a4;
  }
  .comment-icon {
    height: 25px;
    width: 100%;
    color: $themec;
    line-height: 35px;
    text-shadow: 0px 0px 1px $themec;
    text-align: center;
  }
  .comment-count {
    line-height: 25px;
    height: 25px;

    font-size: 13px;
    text-align: center;
    text-shadow: 0px 0px 0.5px rgb(129, 129, 129);
  }

  .content {
    flex: 1;
  }
  .title {
    font-size: 18px;
    line-height: 24px;
    color: #262626;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    word-break: break-all;

    @include _hover(rgb(0, 0, 0));
  }
  .description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    word-break: break-all;

    height: 65px;
    line-height: 1.7;
    letter-spacing: 1px;
    font-size: 14px;
    margin-top: 12px;
    color: #8c8c8c;

    @include _hover(rgb(0, 0, 0));
  }

  .cover {
    width: 160px;
    height: 100px;
    margin-left: 24px;
    background: forestgreen;
    .cover-img {
      width: 160px;
      height: 100px;
      border: 1px solid $bdc;
    }
  }

  .bottom {
    margin-top: 16px;
    margin-left: 60px;
    align-items: center;
    color: #8c8c8c;
    display: flex;
  }
  .time {
    margin-left: 12px;
    font-size: 13px;
  }
  .tag {
    font-size: 13px;
    color: #4b4b4b;
    &::before {
      display: inline-block;
      content: '发布于';
      font-size: 13px;
      color: #8c8c8c;
      margin-right: 4px;
    }
  }
  .page-view {
    margin-left: 12px;
    font-size: 13px;
    color: #4b4b4b;
    &::after {
      font-size: 13px;
      margin-left: 4px;
      content: '个人浏览过';
      color: #8c8c8c;
    }
  }
}

.none-articles {
  padding: 24px;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .icon {
    font-size: 150px;
    color: #e7e7e7;
  }

  .text {
    color: #a0a0a0;
    width: 160px;
    height: 40px;
    text-align: center;
    letter-spacing: 1px;
    line-height: 40px;

    margin-top: 20px;
  }
}
</style>