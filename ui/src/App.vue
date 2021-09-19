<template>
  <div class="app">
    <TopBar class="h55" />
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '@theme';
.app {
  width: 100%;
  height: 100%;
  background: url('@/assets/image/bg.png') no-repeat left;
  background-size: 90%;
}
</style>
