 <!--
 * @desc: 文章列表项
 * @author czh996.top
 * @Date: 2021年4月15日
 -->
<template>
  <div class="article-item" @mouseenter="hoverHandle" @mouseleave="hoverHandle">
    <div class="article-content">
      <div class="left">
        <!-- 控制评论开关的按钮 Start -->
        <article-item-comment-button
          :count="this.articleItem.comment_count"
          @click="commentClickHandle"
          :commentShow="commentShow"
        ></article-item-comment-button>
      </div>
      <!-- 控制评论开关的按钮 End -->

      <div class="middle">
        <!-- 标题 Start -->
        <div class="title">{{ this.articleItem.title }}</div>
        <!-- 标题 End -->

        <!-- 文章概要 Start -->
        <div class="descr">
          {{ this.articleItem.description }}
        </div>
        <!-- 文章概要 End -->
      </div>

      <div class="right">
        <!-- 文章封面 Start -->
        <img :src="this.articleItem.cover" alt="" class="cover" />
        <!-- 文章封面 End -->
      </div>
    </div>

    <!-- 文章操作 Start -->
    <div class="article-actions">
      <article-item-actions
        :shareBtnShow="shareBtnShow"
        :actions="this.articleItem.actions"
      ></article-item-actions>
    </div>
    <!-- 文章操作 End -->

    <!-- 文章评论 Start -->
    <div class="comment" v-if="commentShow">
      <comment
        :count="this.articleItem.comment_count"
        :comments="comments"
        @close="closeComment"
      ></comment>
    </div>
    <!-- 文章评论 End -->
  </div>
</template>

<script>
import ArticleItemCommentButton from './ArticleItemCommentButton';
import ArticleItemActions from './ArticleitemActions';
import Comment from '@/components/comment/Comment';
import { getComments } from '@/services/article';

export default {
  name: '',

  components: {
    ArticleItemCommentButton,
    ArticleItemActions,
    Comment,
  },

  props: {
    articleItem: {
      type: Object,
    },
  },

  data() {
    return {
      shareBtnShow: false,
      commentShow: false,
      comments: null,
    };
  },

  methods: {
    hoverHandle(e) {
      this.shareBtnShow = e.type === 'mouseenter' ? true : false;
    },
    commentClickHandle() {
      if (!this.commentShow) {
        getComments({
          email: this.$store.state.email,
          _id: this.articleItem._id,
        }).then((data) => {
          this.comments = data.data;
          this.commentShow = !this.commentShow;
        });
      } else {
        this.commentShow = !this.commentShow;
      }
    },
    closeComment() {
      this.commentShow = false;
    },
  },
};
</script>
 
<style scoped lang='scss'>
@import '@app';
@import '@theme';
.article-item {
  box-sizing: content-box;
  padding: 24px;
  border-bottom: 1px solid $bdc;
}

.article-content {
  display: flex;
  height: 100px;

  .left {
    width: 60px;
    height: 100%;
  }

  .middle {
    flex: 1;
    height: 100%;
    .title {
      @include _hover(#000, $time: 0.1s);
      height: 26px;
      line-height: 26px;
      font-size: 20px;
      color: #333;
    }
    .descr {
      @include _ellipsis();
      @include _hover(#333, $time: 0.1s);
      height: 60px;
      margin-top: 12px;
      font-size: 14px;
      line-height: 1.5;
      color: #686868;
      letter-spacing: 0.5px;
    }
  }

  .right {
    height: 100%;
    margin-left: 32px;
    width: 160px;
    .cover {
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }
}

.article-actions {
  height: 20px;
  margin-top: 32px;
}

.comment {
  margin: 20px 0;
}
</style>