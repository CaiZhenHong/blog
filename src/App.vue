<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { GET_EMAIL } from '@/store/type';
export default {
  // 应用开启时就发起获取用户信息的请求
  created() {
    // 通过 url 获取邮箱号码传给 mutation
    let email = window.location.pathname.replace('/', '');
    this.$store.commit(GET_EMAIL, email);
    this.$store.dispatch('getuser');
  },
};
</script>

<style lang="scss">
@import '@theme';
#app {
  border-top: 1px solid #00000000;
  height: 100%;
  background: $bg;
}
</style>
