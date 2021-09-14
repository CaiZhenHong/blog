<template>
  <div class="w1200 center">
    <HomeProfile />
    <div class="flex">
      <HomeArticle class="flex-1" />
      <HomeLink class="w280 ml20" />
    </div>
  </div>
</template>

<script>
import HomeLink from './HomeLink.vue'
import HomeProfile from './HomeProfile.vue'
import HomeArticle from './HomeArticle.vue'

export default {
  components:{ HomeLink, HomeProfile, HomeArticle }
}
</script>

<style>
</style>
