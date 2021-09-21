<template>
  <div>
    <div class="page">
      <div class="f14 bdb pt10 pb10 pl20 pr20 black_2">文章信息</div>
      <div class="flex flex-between f12 bg-gray_4 pl15 article-info">
        <div class="fcenter flex-1 flex-column">
          <div class="blue_2">今日阅读数</div>
          <div class="f18 mt15 mb15 black_3">{{read_count.today | countFormat}}</div>
          <div class="blue_1">昨日数据 <span class="f13 black_3">{{read_count.yesterday | countFormat}}</span></div>
        </div>
        <div class="fcenter flex-1 flex-column">
          <div class="blue_2">今日点赞数</div>
          <div class="f18 mt15 mb15 black_3">{{like_count.today | countFormat}}</div>
          <div class="blue_1">昨日数据  <span class="f13 black_3">{{like_count.yesterday | countFormat}}</span></div>
        </div>
      </div>
    </div>      
  </div>
</template>

<script>
import { get_articles_info } from '@/api'

export default {
  data: function(){
    return {like_count:{}, read_count: {}}
  },

  beforeCreate: function(){
    get_articles_info().then(({data}) => {
      const { like_count, read_count } = data
      this.like_count = like_count
      this.read_count = read_count
    })
  }
}
</script>

<style lang="scss" scoped>
.article-info {
  margin: 18px;
  padding: 14px;
}
</style>
