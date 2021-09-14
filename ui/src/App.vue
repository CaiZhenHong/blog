<template>
  <div class="app">
    <TopBar class="h55" />
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@theme';

.app {
  width: 100%;
  height: 100%;
  background: $background;
}
</style>