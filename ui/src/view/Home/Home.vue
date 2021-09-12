<template>
  <div class="w1024 flex flex-between home">
    <HomeArticles />
    <HomeProfile />
  </div>
</template>

<script>
import HomeArticles from './HomeArticles.vue'
import HomeProfile from './HomeProfile.vue'

export default {
  components: { HomeArticles, HomeProfile }
}
</script>

<style lang="scss" scoped>
.home {
  margin: 0 auto;
}
</style>f
