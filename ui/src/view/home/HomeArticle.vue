<template>
  <div class="page">
    <div class="h50 bdb flex flex-items-center f14">
      <div button :class="['ml20', 'item', { theme: inNewPage }]" @click="toNew">最近发布</div>
      <div button :class="['ml20', 'item', { theme: !inNewPage }]" @click="toCatlogue">文章目录</div>
    </div>
    <keep-alive><router-view /></keep-alive>
  </div>
</template>

<script>
export default {
  methods: {
    toNew:function(){ this.$router.push({name: 'HomeArticleNew'}) },
    toCatlogue: function(){ this.$router.push({name: 'HomeArticleCatlogue'}) }
  },

  computed: {
    inNewPage: function (){
      return this.$route.name === 'HomeArticleNew'
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  &:hover{ color: #0070c5c2; }
}
</style>
