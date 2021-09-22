<template>
  <div>
    <TopBar class="h55" />
    <div class="w1024 center">
      <HomeProfile class="mt20" />
      <div class="flex">
        <HomeArticle class="flex-1 mt20" />
        <div class="w280 ml25 mt20 unselected" ><HomeLink class="mb20" /><HomeReadInfo /></div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeLink from './HomeLink.vue'
import HomeReadInfo from './HomeReadInfo.vue'
import HomeProfile from './HomeProfile.vue'
import HomeArticle from './HomeArticle.vue'

export default {
  components:{ HomeLink, HomeProfile, HomeArticle, HomeReadInfo }
}
</script>

<style>

</style>
