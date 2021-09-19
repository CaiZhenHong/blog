<template>
<div>
  <ul v-show="articles">
      <li v-for="({ title, content, comment_count, tag, date, cover, like_count, liked, liking },index) in articles" :key="index" class="h140 page-padding flex bdb">
          <div class="w60">
              <div button class="bd w40 h50 bg-gray_2 flex flex-column flex-items-center" @click="likeHandle(index)">
                  <div iconfont class="icon_like flex-1 f18 flex fcenter theme_1" :class="{icon_liked: liked, liking}"></div>
                  <div class="f12 flex-1 flex fcenter black_1">{{like_count|countFormat}}</div>
              </div>
          </div> 
          <div class="flex-1">
              <div button class="f18 lh15 black_1 blod">{{title}}</div>
              <div button class="f14 mt12 h65 black_3 lh15 ellipsis">{{content}}</div>
              <div class="mt16 f14 flex gray_1">
                  <div button iconfont class="mr25 black_2 icon_comment flex">{{comment_count|countFormat}} 条评论</div>
                  <div class="mr25">发布于 <span button class="black_2">{{tag}}</span></div>
                  <div iconfont class="icon_time">{{date|dateFormat}} 发布</div>
              </div>
          </div>
          <img class="w160 h100 ml25 pointer" :src="cover" alt="">
      </li>
  </ul>
  <MyLoadIcon v-show="!articles" class="mt25 mb24" />
</div>
</template>

<script>
import { get_articles_new, put_article_info } from '@/api'

export default {
    data:function(){return { articles:null }},

    methods: {
        likeHandle: function(index){
            const article = this.articles[index]
            article .liking = true
            const setLike = function(){
                    article.liking = false
                    article.liked = !article.liked
                    article.liked ? article.like_count++ : article.like_count--
                }
            put_article_info().then((data) => {
                data.time > 150 ? setLike():(setTimeout(setLike,100))
            })
        }
    },

    beforeCreate:function(){
        get_articles_new().then((data) => { 
            data = data.map(item => { item.liking = false; return item })
            this.articles = data
         })
    }
}
</script>

<style lang="scss">
.icon_like {
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.liking {
    transform: scale(0);
}
</style>
