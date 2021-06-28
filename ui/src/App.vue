<template>
  <div class="app">
    <blog-home></blog-home>
  </div>
</template>

<script>
import BlogHome from '@/views/home/Home.vue';

export default {
  components: {
    BlogHome,
  },
};
</script>

<style lang="scss" scoped>
@import '@theme';

.app {
  width: 100%;
  height: 100%;
  background: $background;
}
</style>