<template>
  <div v-html="view" class="editorviews"></div>
</template>

<script>
import marked from 'marked'
export default {
    props:{
        viewData: {type:String, default: ''},
    },

    computed: {
      view: function(){
        return marked(this.viewData)
      }
    }
}
</script>

<style lang="scss" scoped>
</style>
