<template>
  <textarea v-model="content" class="editorarea"></textarea>
</template>

<script>

export default {
    data:function(){
        return {content: ''}
    },

    watch:{
        content:function(content){
            this.$store.commit('article/updateArticle',{content} )
        },
    },

    mounted: function(){
        this.content = this.$store.state.article.draft.content || ''
    }
}
</script>

<style lang="scss" scoped>
.editorarea {
    font-family: PingFangSC-Regular, "Microsoft YaHei", "Open Sans", Arial, "Hiragino Sans GB", "微软雅黑", STHeiti, "WenQuanYi Micro Hei", SimSun, sans-serif;
    line-height: 22px;
    word-spacing: 1px;
}
</style>
