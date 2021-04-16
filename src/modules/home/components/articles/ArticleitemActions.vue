 <!--
 * @desc: 文章操作及信息
 * @author czh996.top
 * @Date: 2021年4月7日
 * @props: [Obejct] ations - 用于渲染操作列表的数据
 * @props: [Boolean] shareBtnShow - 控制分享按钮隐藏显示
 * @example
 *  <article-item-comment-button :actions="actions" :shareBtnShow="shareBtnShow"></article-item-comment-button>
 -->
<template>
  <div class="iconfont actions">
    <!-- 文章发布时间 Start -->
    <div class="actions-item">
      <div class="icon">&#xe630;</div>
      {{ actions.time | date }}
    </div>
    <!-- 文章发布时间 End -->

    <!-- 文章浏览量 Start -->
    <div class="actions-item">
      <div class="icon">&#xe7d0;</div>
      {{ actions.pageview | count }} 人看过
    </div>
    <!-- 文章浏览量 End -->

    <!-- 文章分享按钮 Start -->
    <div class="actions-item icon-share" v-show="shareBtnShow">
      <div class="icon">&#xe675;</div>
      分享
    </div>
    <!-- 文章分享按钮 End -->

    <!-- 文章标签 Start -->
    <div class="actions-item actions-tag">{{ actions.tag }}</div>
    <!-- 文章标签 End -->
  </div>
</template>
 
<script>
import filter from '@/mixins/filter';

export default {
  props: {
    // 接收一个布尔值用于控制分享按钮显示或者隐藏
    shareBtnShow: {
      type: Boolean,
    },
    // 接送一个对象用于渲染此组件
    actions: {
      type: Object,
    },
  },

  mixins: [filter],
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.actions {
  margin-left: 60px;
  .actions-item {
    float: left;
    height: 20px;
    line-height: 20px;
    margin-right: 24px;
    font-size: 12px;
    color: #8c8c8c;
    cursor: default;
    .icon {
      float: left;
      margin-right: 5px;
      margin-top: -1px;
      font-size: 14px;
      color: #8c8c8c;
    }
  }

  .icon-share {
    cursor: pointer;
    &:hover {
      .icon {
        color: $themec;
      }
      color: $themec;
    }
  }

  .actions-tag {
    float: right;
    padding: 0 12px;
    margin-right: 160px;
    border: 1px solid $bdc;
    @include _hover(#fff, $themec);
  }
}
</style>