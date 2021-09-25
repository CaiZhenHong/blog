<template>
    <my-dialog-c :title="model.title" :confirmText='model.confirmText' :confirm='confirm'  :show='show'>
      <div class="page-padding">
        <div class="flex">
            <div class="f14 mt10 black_3">已有分类：</div>
            <ul class="flex flex-wrap w350 flex-start ml15 mr15 blue_1">
                <li :button='currentIndex==index?undefined:""' class="h30 pl20 pr20 bg-gray_4 mr20 mt10 fcenter catlogue-item f13" :class="{select:currentIndex==index}" v-for="({title}, index) in catlogues" :key="index" @click="currentIndex=index">{{title}}</li>
            </ul>
        </div>
        <div class="mt60 flex flex-items-center">
            <div class="f14 black_3 mr15">添加分类：</div>
            <div class="bd w300 flex h30">
                <input class="fit-height flex-1 f14 pl5 black_2 f14" placeholder="请在此添加分类" v-model="newCatlog"/>
                <transition name="fade">
                <my-button primary v-show="newCatlog" button iconfont class="fit-height w32 fcenter theme_1 blod f18" @click="onAddCatlogue">&#xe8e5;</my-button>
                </transition>
            </div>
        </div>
        <div class="mt60 black_3 f14 flex">
            <div>文章封面：</div>
            <div button class="w160 h80 bg-gray_2 cover-input fcenter flex-column ml15">
                <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web_editor/img/add.0e2d17b6.svg" alt="">
                <div class="gray_1 mt5">添加封面</div>
            </div>
        </div>
        <div class="mt60 mb50 black_3 f14 flex">
            <div>文章摘要：</div>
            <textarea class="bd pl10 pr10 pt10 pb10 bg-gray_2 f14 ml15 h100 w300" placeholder="用一句简短的话来概况你的项目吧~" ></textarea>
        </div>
      </div>
    </my-dialog-c>
</template>

<script>
export default {
    props:{
        show:{}
    },
    
    data(){return {
        model: {
            title:'文章发布',
            confirmText:'发布',
        },
        currentIndex: 0,
        newCatlog:'',
        catlogues:null
    }},

    methods: {
        confirm: function(close){
            close()
        },
        onAddCatlogue: function(){
            this.$store.dispatch('article/putCatlogue', this.newCatlog).then((data) => {
                this.catlogues = data
                this.newCatlog = ''
                this.currentIndex = data.length - 1
                this.$toast({
                    msg:'添加新分类成功',
                    type:'succeed'
                })
            })
        }
    },

    mounted(){
      this.$store.dispatch('article/getCatlogue').then((data) => {
        this.catlogues = data
      })
    }
}
</script>

<style lang="scss" scoped>
.catlogue-item {
    &:hover{background-color: $gray_3;}
}
.cover-input{
    border: 1px dashed $gray_3;
}
.page-padding{
    padding: 48px;
    letter-spacing: 1px;
}
input, textarea {
    &::placeholder {
        font-size: 12px;
        color: $gray_3;
    }
}
.select {
    background-color: #e8f3ff; color: #1d7dfa;
    cursor: default;
    &:hover{background-color: #e8f3ff; color: #1d7dfa;}
}
</style>
