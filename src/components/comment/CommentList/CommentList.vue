 <!--
 * @desc: 评论列表
 * @author czh996.top
 * @Date: 2021年4月07日
 * @prop: { Array } 用于渲染评论组件的数据
 * @example
 *  <comment-list comments="comments"></comment-list>
 -->
<template>
  <div>
    <!-- 加载提示，请求时数据时显示 Start -->
    <div v-if="!comments" class="comment-loader">
      <base-loader>评论加载中 ...</base-loader>
      <div>{{ comments }}</div>
    </div>
    <!-- 加载提示，请求时数据时显示 End -->

    <!-- 评论列表 Start -->
    <div class="comment-list">
      <!-- 一级评论 Start -->
      <comment-list-item
        class="item-1th"
        v-for="(comment, key) in comments"
        :key="key"
        :item="comment"
      >
        <!-- 二级评论 Start -->
        <comment-list-item
          class="item-2th"
          v-for="(reply, key) in comment.replys"
          :key="key"
          :item="reply"
        >
        </comment-list-item>
        <!-- 二级评论 End -->
      </comment-list-item>
      <!-- 一级评论 End -->
    </div>
    <!-- 评论列表 End -->
  </div>
</template>

<script>
import CommentListItem from './CommentListItem';
import { BaseLoader } from '@/components/base';

export default {
  components: { CommentListItem, BaseLoader },
  props: ['comments'],
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.item-1th {
  padding: 0 24px;
  border-top: 1px solid $bdc;
}

.item-2th {
  border-top: 1px solid $bdc;
  margin-left: 38px;
}

.comment-loader {
  text-align: center;
  border-top: 1px solid $bdc;
  padding: 30px 0;
  font-size: 14px;
  color: #808080;
}
</style>