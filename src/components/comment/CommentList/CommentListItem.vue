<!-- 
     @desc 评论项 组件

     @author CZH996.TOP

     @date 2021年4月9日

     @param {Object} [item]    - 渲染单条评论/回复

     @example 
          <comment-item :item="item"></comment-item>
 -->
<template>
  <div>
    <div class="comment-content">
      <!-- 评论信息 Start -->
      <div class="info">
        <img class="info-photo" :src="item.photo" alt="" />
        <div class="info-name">
          {{ item.name }} <span class="info-reply" v-if="item.to">回复</span>
          {{ item.to }}
        </div>
        <div class="info-time">{{ item.time | date }}</div>
      </div>
      <!-- 评论信息 End -->

      <!-- 文字  -->
      <div class="comment-text">
        {{ item.content }}
      </div>

      <!-- 回复按钮 Start  -->
      <div class="reply-btn" @click="clickHandle">
        <div class="iconfont icon">&#xe60d;</div>
        回复
      </div>
      <!-- 回复按钮 End  -->

      <!-- 回复输入框 Start -->
      <comment-input class="inputs" v-if="show"> </comment-input>
      <!-- 回复输入框 End-->
    </div>
    <slot></slot>
  </div>
</template>

<script>
import filter from '@/mixins/filter';
import CommentInput from '../CommentInput';

export default {
  components: {
    CommentInput,
  },

  data() {
    return {
      show: false,
    };
  },

  props: {
    item: {
      type: Object,
    },
  },

  methods: {
    clickHandle() {
      this.show = !this.show;
    },
  },

  mixins: [filter],
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';
.comment-content {
  margin: 10px 0;
  margin-top: 15px;
}
.info {
  @include _flex();
  .info-photo {
    width: 28px;
    border: 1px solid $bdc;
  }
  .info-name {
    flex: 1;
    margin-left: 12px;
    font-size: 13px;
    color: #333;

    .info-reply {
      font-size: 13px;
      color: rgb(129, 129, 129);
    }
  }
  .info-time {
    font-size: 13px;
  }
}

.comment-text {
  margin-left: 40px;
  margin-top: 4px;
  font-size: 14px;
  line-height: 1.8;
}

.reply-btn {
  color: rgb(34, 34, 165);
  height: 20px;
  display: inline-block;
  margin-top: 4px;
  margin-left: 40px;
  font-size: 12px;
  line-height: 20px;
  cursor: pointer;
  transition: all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    color: $themec;
  }
  .icon {
    margin-right: 5px;
    font-size: 16px;
    float: left;
  }
}
.inputs {
  padding-left: 38px;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>