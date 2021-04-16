<template>
  <div id="app">
    <div class="top-bar-warp">
      <top-bar class="top-bar"></top-bar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import TopBar from '@/modules/topBar/components/TopBar';

export default {
  components: {
    TopBar,
  },
};
</script>

<style lang="scss">
@import '@theme';
#app {
  height: 100%;
  background: $bg;
}
.top-bar-warp {
  border-bottom: 1px solid $bdc;
  background: $topBarG;
  .top-bar {
    max-width: 1400px;
    margin: 0 auto;
  }
}
</style>
