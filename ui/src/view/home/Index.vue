<template>
  <div>
    <HomeProfile />
    <div>
      <HomeArticle />
      <HomeLink />
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