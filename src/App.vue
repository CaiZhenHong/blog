<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapActions } = createNamespacedHelpers('user');

export default {
  methods: {
    ...mapActions(['getUserInfo']),
  },

  created: function () {
    // 获取用户信息
    let id = window.location.pathname;
    let reg = /(setting|\/)/g;
    if (reg.test(id)) {
      id = '/';
    }

    this.getUserInfo(id);
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
