<!--
    @desc 模板 
    @props
    @emit   
    @date
    @author caizhenhong
 -->
<template>
  <div>
    <div class="inner">
      <div class="left">
        <h1 class="logo">myblog</h1>
        <slot></slot>
      </div>

      <div class="mb-left"></div>
      <h1 class="mb-logo logo">myblog</h1>
      <div class="mb-right"></div>

      <div class="right">
        <div class="un-login" v-if="true">
          <div class="log-in"></div>
          <div class="sign-in"></div>
        </div>
        <div class="login" v-else>
          <div class="write-button"></div>
          <div class="notice"></div>
          <div class="profile"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@theme';
@import './TopBar.scss';
@import './TopBarMobile.scss';
</style>