<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { GET_EMAIL } from '@/store/type';
export default {
  methods: {
    // 获取用户信息
    getUser() {
      let path = window.location.pathname.replace('/', '');
      let regular = /^[\w]+@+[a-z0-9]+.+[a-z]+$/g;

      if (regular.test(path)) {
        this.$store.commit(GET_EMAIL, path);
      } else {
        this.$store.commit(GET_EMAIL, '1229542068@qq.com');
      }
      this.$store.dispatch('getuser');
    },
  },

  created() {
    this.getUser();
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
