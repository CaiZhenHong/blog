 <!--
 * @description: 加载动画
 * @Author: 蔡sir
 * @Date: 2021年3月5日
 * @props:{Boolean} [text=true] - 控制文字显示与隐藏
 * @example
 *    <base-loader>加载中</base-loader>
 -->
<template>
  <div>
    <div class="icon iconfont icon-show">&#xe6cd;</div>
    <div class="loader-text" v-if="text"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'Loader',

  props: {
    text: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped lang='scss'>
.icon {
  animation: loader 1.5s infinite linear;
  display: inline-block;
}
.loader-text {
  display: inline-block;
  margin-left: 15px;
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>