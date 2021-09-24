<template>
  <textarea v-model="content" class="editorarea"></textarea>
</template>

<script>

export default {
    data:function(){
        return {content: ''}
    },

    mounted: function(){
        if(localStorage.getItem('draft')) this.content = localStorage.getItem('draft')
    },

    watch:{
        content:function(value){
            this.$emit('output', value)
        }
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
