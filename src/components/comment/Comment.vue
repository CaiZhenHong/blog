<!-- 
     @desc 评论组件
     @author CZH996.TOP
     @date 2021年4月9日
     @props { Number } [count]    - 一篇文章的评论数
     @example 
      <comment  :count="Commentcount"></comment>
 -->
<template>
  <div>
    <div class="comment" ref="homeComment">
      <!-- 文章评论数量 Start -->
      <div class="count">{{ count }} 条评论</div>
      <!-- 文章评论数量 End -->

      <!-- 加载提示 Start -->
      <div v-if="!comments" class="comment-loader">
        <loader>评论加载中 ...</loader>
        <div>{{ comments }}</div>
      </div>
      <!-- 加载提示 End -->

      <div v-else>
        <!-- 文章收起按钮 Start -->
        <div class="comment-btn iconfont" @click="close" v-show="tipshow">
          <div>&#xe891; 收起评论</div>
        </div>
        <!-- 文章收起按钮 End -->

        <!-- 一级评论 Start -->
        <comment-item
          class="item-1th"
          v-for="(comment, key) in comments"
          :key="key"
          :item="comment"
        >
          <!-- 二级评论 Start -->
          <comment-item
            class="item-2th"
            v-for="(reply, key) in comment.replys"
            :key="key"
            :item="reply"
          >
          </comment-item>
          <!-- 二级评论 End -->
        </comment-item>
        <!-- 一级评论 End -->

        <div class="input">
          <comment-input class="inputs"></comment-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentItem from './CommentItem';
import CommentInput from './CommentInput';
import Loader from '@/components/loader/Loader';
import throttle from '@/utils/throttle';

export default {
  components: { CommentItem, CommentInput, Loader },

  data() {
    return {
      tipshow: false,
    };
  },

  props: {
    count: {},
    comments: {},
  },

  methods: {
    scrollHandle() {
      if (this.$refs.homeComment) {
        this.tipshow =
          this.$refs.homeComment.offsetTop <= window.scrollY ? true : false;
      }
    },

    close() {
      this.$emit('close');
    },
  },

  mounted() {
    window.addEventListener('scroll', throttle(this.scrollHandle, 200));
  },
};
</script>

<style  lang='scss' scoped>
@import '@app';
@import '@theme';

.comment {
  @include _box();
  box-shadow: 0 0 5px $bdc;
}

.count {
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  padding-left: 20px;
}

.item-1th {
  padding: 0 24px;
  border-top: 1px solid $bdc;
}

.item-2th {
  border-top: 1px solid $bdc;
  margin-left: 38px;
}

.inputs {
  padding: 15px 20px;
  border-top: 1px solid $bdc;
}
.comment-btn {
  @include _box(#fff, $border_radius: 5px);
  position: sticky;
  top: 50%;
  float: right;
  padding: 10px;
  margin-right: -110px;
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  text-align: center;
  font-size: 12px;
  @include _hover($background: #f5f5f5);
}

.comment-loader {
  text-align: center;
  border-top: 1px solid $bdc;
  padding: 30px 0;
}
</style>