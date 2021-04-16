<!-- 
     @desc 评论显示隐藏按钮
     @author CZH996.TOP
     @date 2021年4月9日
     @props { Number } [count]     - 留言数
     @props { Boolean } [commentShow]    - 提示信息
     @emit { Event } [click] - 向父元素传递一个click事件
     @example 
      <comment :comment="comment" @scroll="scrollHadnle" :count="Commentcount" @click=cilckHandle()></comment>
 -->
<template>
  <div
    class="article-item-comment-button"
    @mouseenter="hoverHandle"
    @mouseleave="hoverHandle"
    @click="clickHandle"
  >
    <div class="iconfont icon">&#xe60d;</div>
    <div class="msg" v-if="commentShow">收起</div>
    <div class="msg" v-else-if="openMsg">查看</div>
    <div class="count" v-else>{{ count }}</div>
  </div>
</template>

<script>
import filter from '@/mixins/filter';
export default {
  name: '',

  props: {
    count: {
      type: Number,
    },
    commentShow: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      openMsg: false, // 开启评论的提示信息
    };
  },

  methods: {
    // 划入此组件时显示 “查看”
    hoverHandle(e) {
      this.openMsg = e.type === 'mouseenter' ? true : false;
    },
    clickHandle() {
      this.$emit('click');
    },
  },
  mixins: [filter],
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.article-item-comment-button {
  @include _flex(vrc);
  @include _box(#f5f5f5, $bdc: #f0f0f0);
  @include _hover($background: #e2e1e1b6);
  justify-content: center;
  width: 40px;
  height: 50px;

  .icon {
    font-size: 18px;
    font-weight: 900;
    color: $themec;
    margin-bottom: 4px;
  }
  .count {
    font-size: 12px;
    color: #000;
  }
  .msg {
    font-size: 12px;
    color: #000;
  }
}
</style>