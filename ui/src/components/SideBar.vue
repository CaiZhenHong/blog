 <!--
 * @description 模板
 * @Date 日期
 -->
<template>
  <div class="side-bar">
    <slot></slot>

    <div class="un-login">
      <div class="log-in">加入</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@theme';

.side-bar {
  z-index: 40;
  position: fixed;
  top: 55px;
  left: 0;
  width: 80%;
  height: 100%;
  background: #fff;
}

.un-login {
  .log-in {
    margin-top: 20px;
    font-size: 14px;
    color: #fff;
    height: 30px;
    line-height: 30px;
  }
}
</style>