 <!--
 * @desc: 注册页面容器
 * @author czh996.top
 * @Date: 2021年4月7日
 -->
<template>
  <div class="container">
    <router-view></router-view>
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

.container {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>