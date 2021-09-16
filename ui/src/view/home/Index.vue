<template>
  <div class="w1000 center">
    <HomeProfile class="mt20" />
    <div class="flex">
      <HomeArticle class="flex-1 mt20" />
      <HomeLink class="w260 ml40  mt20" />
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
