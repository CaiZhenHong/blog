<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  beforeCreate: function(){
    console.log(Cookies.get('session'));
  }
};
</script>

<style lang="scss">
@import '@theme';
.app {
  width: 100%;
  height: 100%;
  background: url('@/assets/image/bg.png') no-repeat left;
  background-size: 80%;
}
</style>
