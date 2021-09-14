<template>
  <ul>
      <li class="bdb pl20 pr20" v-for="(item, index) in 5" :key="index">
          <div button class="f18 lh16 mt10">标题</div>
          <div class="flex mt10">
              <img button class="cover mr15" src="" alt="">
              <div button class="flex-1 f15">内容</div>
          </div>    
          <div class="flex flex-items-center f14 actions">
              <div button class="mr25 h30 w100 bg-blue theme bd bdr flex flex-items-center flex-center">赞同</div>
              <div button class="mr25">评论数</div>
              <div button class="mr25">分享</div>
              <div button class="mr25">标签</div>
              <div class="mr25">发布于 时间</div>
          </div>
      </li>    
  </ul>
</template>

<script>
export default {
    data(){ return{  } }
}
</script>

<style>
.cover {
    width: 190px;
    height: 105px;
    border-radius: 10px;
}
.bdr {
    border-radius: 3px;
}
.actions {
    padding: 10px 0;
    color: #8590a6;
    letter-spacing: 0.5px;
}
</style>
