<template>
  <div>
    <div class="h40 bdb f13 flex flex-start flex-items-center pl20"><div iconfont button class="icon_arrow black_3" @click="toOutlinePage">返回目录</div></div>
    <div class="pt24 pb80 pl48 pr48" v-if="catlogue">
      <div class="fcenter bloder f22 mb50 mt50">{{title}}</div>
      <div>
        <ul class="ml10 fit-height" v-for="({ title, aritlces, hidden }, index) in catlogue" :key="index">
          <div button class="f15 blod lh20 mt12 black_3 flex flex-items-center"  @click="articleHiddenHandle(index)">
            <div iconfont class="mr10 arrow f12" :class="{hidden}">&#xe600;</div>{{title}}
          </div>
          <transition name="slide-fade">
          <div v-show="!hidden">
              <li class="ml25 mr30 flex flex-between flex-items-center f13" v-for="({ article_title, date }, index) in aritlces" :key="index">
                <div button class="lh17 mr20 pt5 pb5 black_2">{{article_title}}</div>
                <div class="line flex-1 "></div>
                <div class="ml20 gray_1">{{ date }}</div>
              </li>
          </div>
          </transition>
        </ul>
      </div>
    </div>
  <MyLoadIcon v-show="!title" class="mt25 mb24" />
  </div>
</template>

<script>
import { get_articles_catlogue_particulars } from '@/api'

export default {
    props:{ 
      title: { type: String }
    },  

    data: function(){ return { catlogue: {} } },

    methods:{
      toOutlinePage: function(){
        this.$emit('back')
      },
      articleHiddenHandle: function(index){
        this.catlogue[index].hidden = !this.catlogue[index].hidden
      }
    },

    watch:{
      title: function (value){
         get_articles_catlogue_particulars().then(({ data }) => { data.map(item => { item.hidden = false; return item }); this.catlogue = data })
      }
    },
}
</script>

<style lang="scss" scoped>
.line {height:0; border-bottom: 1px dotted $gray_3;}
.arrow {
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform: rotate(-90deg);
}
.hidden {
  transform: rotate(-180deg);
}
</style>
