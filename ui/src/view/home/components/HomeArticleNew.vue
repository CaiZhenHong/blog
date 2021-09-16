<template>
  <ul>
      <li class="bdb page-padding black" v-for="({ title, content, cover, like_count, liked, comment_count, date, tag }, index) in articles" :key="index">
          <div button class="f18 lh16 mt10 ml5">{{ title }}</div>
          <div button class="flex mt20">
              <img class="cover mr15" :src="cover" :alt="title">
              <div class="flex-1 f15 lh17 elipses">{{ content }}</div>
          </div>    
          <div class="flex flex-items-center f14 actions">
              <div button class="w100 h30 mr25 f13 bg-blue flex flex-items-center flex-center theme bdradius" :class="{liked}" @click="likeHandle(index)">
                  <MyLoadIcon v-if="likeLoading"><span></span></MyLoadIcon>
                  <span v-else>{{ liked? '已赞同' : '赞同'}}</span>
                  <span v-else class="ml5">{{like_count}}</span>
              </div>
              <div button class="mr25 flex flex-items-center hover"><span iconfont class="mr5">&#xe60d;</span>{{comment_count}} 条评论</div>
              <div button class="mr25 hover"><span iconfont class="mr5">&#xe675;</span>分享</div>
              <div button class="mr25 hover">{{tag}}</div>
              <div class="mr25">发布于 {{ date | dateFormat }}</div>
          </div>
      </li>
      <MyLoadIcon class="theme mt25 mb24" />
  </ul>
</template>

<script>
import { get_articles_new, put_article_info } from '@/api'

export default {
    data(){ return{ articles: [], likeLoading: false } },
    methods: {
        likeHandle:function (index){
            let liked = !this.articles[index].liked
            this.likeLoading = true
            put_article_info({ liked }).then(({ data }) => {
                this.articles[index].liked = liked
                this.likeLoading = false
            })
        }
    },
    beforeCreate(){
        get_articles_new().then(({ data }) => { this.articles = data })
    }
}
</script>

<style lang="scss" scoped>
.liked {
    background-color: #0071c5;
    color: #ffffff;
}
.cover {
    width: 190px;
    height: 105px;
    border-radius: 10px;
}
.actions {
    padding: 10px 0;
    color: #8590a6;
    letter-spacing: 0.5px;
}
.hover{ &:hover{ color: #0071c5; } }
</style>
