<!--
 * @desc: LOGO
 * @author czh996.top
 * @Date: 2021年4月2日
 -->

<template>
  <div class="top-bar-logo">
    <router-link to="/" custom v-slot="{ navigate }">
      <div @click="navigate">
        <div class="left">
          <slot name="left">My</slot>
        </div>

        <div class="right">
          <slot name="right">BLOG</slot>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TopBarLogo',
};
</script>

<style scoped lang='scss'>
@import '@theme';
.top-bar-logo {
  cursor: pointer;
  .left,
  .right {
    float: left;
    border-radius: 4px;
    padding: 4px;
    font: 700 18px 'Microsoft YaHei';
  }
  .right {
    background: $themec;
    color: #fff;
    margin-left: 5px;
  }
}
</style>