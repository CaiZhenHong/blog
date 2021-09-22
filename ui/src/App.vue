<template>
  <div class="fit-width fit-height app">
    <router-view />
    <MyToast />
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
@import '@theme';
.app {
  background: url('@/assets/image/bg.png') no-repeat left;
  background-size: 80%;
}
</style>
