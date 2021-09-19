<template>
  <div class="w1024 center">
    <HomeProfile class="mt20" />
    <div class="flex">
      <HomeArticle class="flex-1 mt20" />
      <HomeLink class="w280 ml25 mt20" />
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
