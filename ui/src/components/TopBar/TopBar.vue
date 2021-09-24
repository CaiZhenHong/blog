<!-- @desc 公共组件 顶部栏 -->

<template>
  <header class="bdb bg-white_1 unselected">
    <div class="w1200 center fit-height flex flex-between flex-items-center">
      <div class="fit-height flex">
        <TopBarLogo />
        <div class="w400 flex flex-items-center ml40"><my-input icon='&#xe60a;' placeholder='搜索' width='230' focusWidth='300'></my-input></div>
      </div>
      <div class="flex">
        <div class="flex flex-items-center">
          <my-button primary v-if="login" @click="ArticleEdit">写文章</my-button>
          <my-button primary v-else @click="loginHandle">登录</my-button>
          <div button class="f14 ml20 flex theme_1" v-if="!login">切换语言 <span iconfont class="f12 blod chang-lang-icon">&#xe600;</span></div>
        </div>
        <div class="flex flex-items-center" v-if="login">
          <div iconfont button class="notice theme_1 ml20">&#xe603;</div>
          <TopBarProfile />
        </div>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  computed: {
    login: function(){ return this.$store.state.user.login }
  },

  methods: {
    ArticleEdit(){this.$router.push({name:'ArticlesEdit'})},
    loginHandle(){ this.$router.push({name:'Login'}) },
  }
};
</script>

<style lang="scss" scoped>


.search-icon {
  width: 35px;
  border-right: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.chang-lang-icon{
  display: inline-block;
  transform: rotate(-90deg);
  margin-left: 5px;
}
</style>
