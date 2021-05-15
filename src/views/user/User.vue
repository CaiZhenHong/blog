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
  <div class="user">
    <div class="top-bar"></div>
    <router-view class="card"></router-view>
  </div>
</template>

<script>
export default {
  name: '',
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.user {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.top-bar {
  height: 67px;
  margin-bottom: 30px;
  border-bottom: 1px solid $bdc;
  background: $topBarG;
}
.card {
  height: 750px;
  max-width: 1400px;
  margin: 10px auto;
  margin-bottom: 100px;
}
</style>