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
        <div class="left-inner">
          <h1 class="logo">myblog</h1>
          <div class="input-slot">
            <slot></slot>
          </div>
        </div>
      </div>

      <div class="right">
        <div class="un-login" v-if="false">
          <div class="log-in"></div>
          <div class="sign-in"></div>
        </div>
        <div class="login" v-else>
          <div class="write-button"></div>
          <div class="notice"></div>
          <div class="profile"></div>
          <div class="option-button"></div>
        </div>
      </div>

      <div class="options">
        <div class="un-login" v-if="false">
          <div class="bar">x</div>
          <div class="input-slot">
            <slot></slot>
          </div>
          <div class="log-in"></div>
        </div>

        <div class="login" v-else></div>
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
</style>