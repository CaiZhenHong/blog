<template>
  <ul class="flex flex-wrap">
    <li class="half-width" v-for="{} in 5">
      <div button class="page flex flex-column flex-between">
        <div class="f14 theme">类名</div>
        <div class="f12">简介</div>
        <div class="f12 blue">时间</div>
      </div>
    </li>
  </ul>
</template>

<script>
import { get_articles_catlogue } from '@/api'

export default {
    beforeCreate(){
        get_articles_catlogue().then(({ data }) => { this.articles = data })
    }
}
</script>

<style lang="scss" scoped>
.half-width {
  width: 50%;
}
.page {
  height: 120px;
  margin: 15px;
  padding: 15px;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover{
    border-color: #cfd3db;
  }
}
</style>
