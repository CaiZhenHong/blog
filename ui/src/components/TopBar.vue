<!-- @desc 公共组件 顶部栏 -->

<template>
  <header class="bdb bg-white_1 unselected">
    <div class="w1200 center fit-height flex flex-between flex-items-center">
      <div class="fit-height flex">
        <div button class="flex flex-items-center">
          <h1 class="logo w32 h32">myblog</h1>
          <div class="theme_1 ml10 f22 blod">MYBLOG</div>
        </div>
        <div class="w400 flex flex-items-center ml40"><my-input icon='&#xe60a;' placeholder='搜索' width='230' focusWidth='300'></my-input></div>
      </div>
      <div class="flex">
        <div class="flex flex-items-center">
          <my-button primary v-if="login" @click="WriteArticle">写文章</my-button>
          <my-button primary v-else @click="loginHandle">登录</my-button>
          <div button class="f14 ml20 flex theme_1" v-if="!login">切换语言 <span iconfont class="f12 blod chang-lang-icon">&#xe600;</span></div>
        </div>
        <div class="flex flex-items-center" v-if="login">
          <div iconfont button class="notice theme_1 ml20">&#xe603;</div>
          <my-pop class="ml20">
            <img button class="profile bd" src="@/assets/image/test.png" slot="trigger" />
            <ul>
              <li class="pl20 pr20 pt10 pb10 mt10 f14 black_2 hover-gray_3" button v-for="({ text, icon }, index) in model" :key="index">
                <span iconfont v-html="icon" class="gray_1 f16 mr5"></span>
                {{text}}
              </li>
            </ul>
          </my-pop>
        </div>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  data:function(){
    return { 
      model:[
        { icon:'&#xe605;',text:'个人主页',routerName:'' },
        { icon:'&#xe631;',text:'账户设置',routerName:'' },
        { icon:'&#xe64b;',text:'English',routerName:'' },
        { icon:'&#xe643; ',text:'提交建议',routerName:'' },
        { icon:'&#xe60b;',text:'退出登录',routerName:'' },
      ]
     }
  },
  
  computed: {
    login: function(){ return this.$store.state.user.login }
  },

  methods: {
    WriteArticle(){},
    loginHandle(){ this.$router.push({name:'Login'}) }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  background: url('@/assets/image/icon/logo-theme.png') no-repeat left;
  background-size: 100%;
  font-size: 0;
}
.profile {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
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
