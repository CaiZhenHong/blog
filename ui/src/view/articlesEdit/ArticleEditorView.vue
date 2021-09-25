<template>
  <div v-html="viewMarked" class="editorviews"></div>
</template>

<script>
import marked from 'marked'
export default {
  computed: {
    viewMarked: function(){
      return marked(this.$store.state.article.content)
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
