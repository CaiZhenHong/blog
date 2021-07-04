<!-- @desc 公共组件 顶部栏 -->

<template>
  <header class="top-bar">
    <div class="inner">
      <div class="left">
        <div class="left-inner">
          <h1 class="logo">myblog</h1>
          <div class="input-slot">
            <slot></slot>
          </div>
        </div>
      </div>

      <div class="right">
        <div class="un-login" v-if="true">
          <div class="log-in">登录</div>
          <div class="sign-in">加入</div>
        </div>
        <div class="login" v-else>
          <div class="write-button">写文章</div>
          <div class="iconfont notice">&#xe603;</div>
          <img class="profile" src="@/assets/image/test.png" />
        </div>
      </div>

      <div class="iconfont option-button">&#xe60f;</div>

      <div class="options">
        <div class="un-login" v-if="true">
          <div class="bar">x</div>
          <div class="input-slot">
            <slot></slot>
          </div>
          <div class="log-in"></div>
        </div>

        <div class="login" v-else></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@theme';
@import './Header.scss';
</style>