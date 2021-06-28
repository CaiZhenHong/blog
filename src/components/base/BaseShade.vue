 <!--
 * @desc: 按钮遮罩
 * @author czh996.top
 * @Date: 2021年4月23日
 * @example
 *  <article-item-comment-button :actions="actions" :shareBtnShow="shareBtnShow"></article-item-comment-button>
 -->
<template>
  <div class="shade"><slot></slot></div>
</template>

<script>
export default {
  name: '',
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.shade {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.411);
}
</style>