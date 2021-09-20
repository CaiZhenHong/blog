<template>
<div>
  <ul v-show="!particularsPage" class="flex flex-wrap">
    <li class="half-width" v-for="({ title, date, preface }, index) in catlogues" :key="index" @click="showParticularsPage(title)">
      <div button class="page flex flex-column flex-between">
        <div class="f14 black_1 blod">{{title}}</div>
        <div class="f12 lh15 ellipsiss_2 black_3">{{preface}}</div>
        <div class="f12 gray_1">{{date | dateFormat}}</div>
      </div>
    </li>
  </ul>

  <MyLoadIcon v-show="!catlogues" class="mt25 mb24" />

  <CatlogueParticulars @back='particularsPage =! particularsPage' v-show="particularsPage" :title='catlogueTitle'/>
</div>
</template>

<script>
import { get_articles_catlogue } from '@/api'
import CatlogueParticulars from './CatlogueParticulars.vue'

export default {
    components: { CatlogueParticulars },

    data:function(){return { catlogues: null, particularsPage: false, catlogueTitle: ''}},

    methods: {
        showParticularsPage: function(title){
          this.catlogueTitle = title
          this.particularsPage = !this.particularsPage
        }
    },

    beforeCreate(){
        get_articles_catlogue().then(({ data }) => { this.catlogues = data })
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
  background-color: $gray_2;
  &:hover{
    border-color: #cfd3db;
    box-shadow: 4px 4px 5px $gray_3;
  }
}
</style>
