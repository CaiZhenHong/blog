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

  <div v-if='!(catlogues && catlogues.length)' class="fcenter flex-column pt100 mb20">
      <div class="fit-width h100  empty"></div>
      <div class="f16 gray_3">暂无内容</div>
  </div>

  <MyLoadIcon v-show="!catlogues" class="mt25 mb24" />

  <CatlogueParticulars @back='particularsPage =! particularsPage' v-show="particularsPage" :title='catlogueTitle'/>
</div>
</template>

<script>
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

    mounted(){
      this.$store.dispatch('article/getCatlogue').then((data) => {
        this.catlogues = JSON.parse(JSON.stringify(data))
      })
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
