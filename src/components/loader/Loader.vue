 <!--
 * @FileDescription: 公共组件 - 吐司
 * @Author: 蔡sir
 * @Date: 2021年3月5日
 -->
<template>
  <div class="loader">
    <div class="icon iconfont icon-show">&#xe6cd;</div>
    <div class="loader-text"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
};
</script>

<style scoped lang='scss'>
.icon {
  animation: loader 1.5s infinite linear;
  display: inline-block;
  color: #333;
  font-size: 17px;
}
.loader-text {
  display: inline-block;
  margin-left: 15px;
  font-size: 14px;
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