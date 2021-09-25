<template>
    <my-dialog-c :title="model.title" :confirmText='model.confirmText' :confirm='confirm'  :show='show'>
      <div class="page-padding">
        <div class="flex">
            <div class="f14 mt10 black_3">已有分类：</div>
            <ul class="flex flex-wrap w350 flex-start ml15 mr15 blue_1" v-if="catlogues && catlogues.length">
                <li :button='currentIndex==index?undefined:""' class="h30 pl20 pr20 bg-gray_4 mr20 mt10 fcenter catlogue-item f13" :class="{select:currentIndex==index}" v-for="({title}, index) in catlogues" :key="index" @click="currentIndex=index">{{title}}</li>
            </ul>
            <div v-else class="f14 mt10 ml15 gray_1">暂无分类，请添加。</div>
        </div>
        <div class="mt60 flex flex-items-center">
            <div class="f14 black_3 mr15">添加分类：</div>
            <div class="bd w300 flex h30">
                <input class="fit-height flex-1 f14 pl10 black_2 bg-gray_2 f14" placeholder="添加新分类..." v-model="newCatlog"/>
                <transition name="fade">
                <my-button primary v-show="newCatlog" button iconfont class="fit-height w32 fcenter theme_1 blod f18" @click="onAddCatlogue">&#xe8e5;</my-button>
                </transition>
            </div>
        </div>
        <div class="mt60 black_3 f14 flex">
            <div>文章封面：</div>
            <div class="ml15" :class="{rp:cover}">
                <div :button='cover?undefined:true' class="w160 h100 bg-gray_2 bd fcenter flex-column" :class="{rp:!cover}">
                    <img v-show="!cover" src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web_editor/img/add.0e2d17b6.svg" alt="">
                    <div v-show="!cover" class="gray_1 mt5">添加封面</div>
                    <input button class="cover-input fit-width" type="file" accept="image/*"  @change="onAddCover">
                    <img v-show="cover" class="cover-img" :src="cover" alt="">
                    <div v-show="cover" button class="cover-img fcenter delete-cover" @click="onDeleteCover">删除封面</div>
                </div>
                <div v-show="cover" button class="theme_1 f13 mt12 fcenter">更换封面</div>
                <div class="gray_1 f12 mt20 fcenter">( 建议尺寸：320 * 200 )</div>
            </div>
        </div>
        <div class="mt60 mb50 black_3 f14 flex">
            <div>文章摘要：</div>
            <textarea class="bd pl10 pr10 pt10 pb10 bg-gray_2 f14 ml15 h100 w300" placeholder="用一句简短的话来概况你的文章吧~" v-model='summarize' ></textarea>
        </div>
      </div>
    </my-dialog-c>
</template>

<script>
import compressImg from '@/util/compressImg'
import {post_article} from '@/api'
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
        catlogues:null,
        cover:'',
        summarize:''
    }},

    methods: {
        confirm: function(close){
            const content = this.$store.state.article.content
            const title = this.$store.state.article.title
            if(!this.summarize){
                this.summarize = content.substring(0, 100)
            }
            post_article({content,summarize:this.summarize,cover:this.cover,title,tag:this.catlogues[this.currentIndex].title})
            close()
        },

        onAddCatlogue: function(){
            const has = this.catlogues.findIndex(item => { return item.title == this.newCatlog } )
            if(has != -1) return this.$toast({msg:'添加失败，您已有此分类'})        

            this.$store.dispatch('article/putCatlogue', this.newCatlog).then((data) => {
                this.catlogues = data
                this.newCatlog = ''
                this.currentIndex = data.length - 1
                this.$toast({
                    msg:'添加新分类成功',
                    type:'succeed'
                })
            })
        },

        onAddCover: function(e) {
            const _this = this
            const file = e.target.files[0]
            if(file.size / 1024 > 1024 * 10) return this.$toast({msg:'图片请勿大于10MB'})
            compressImg(file, 800, 800, ({base64}) => {
                _this.cover = base64
            })
        },

        onDeleteCover: function() {
            this.cover = ''
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
.cover-img {
    width: 159px;
    height: 99px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
.cover-input{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
}
.delete-cover {
    background: rgba(128, 128, 128, 0.39);
    color: $white_1;
    opacity: 0;
    &:hover{opacity: 1;}
}

.page-padding{
    padding: 48px;
    letter-spacing: 1px;
}
input, textarea {
    &::placeholder {
        font-size: 12px;
        color: $gray_1;
    }
}
.select {
    background-color: #e8f3ff; color: #1d7dfa;
    cursor: default;
    &:hover{background-color: #e8f3ff; color: #1d7dfa;}
}

</style>
