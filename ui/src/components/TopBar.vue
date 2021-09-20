<!-- @desc 公共组件 顶部栏 -->

<template>
  <header class="bdb bg-white_1">
    <div class="w1200 center fit-height flex flex-between flex-items-center">
      <h1 button class="logo fit-height">myblog</h1>

      <div class="flex">
        <div class="flex flex-items-center">
          <my-button primary v-if="login" @click="WriteArticle">写文章</my-button>
          <my-button primary v-else @click="loginHandle">登录</my-button>
          <div button class="f14 ml20 theme_1" v-if="!login">切换语言</div>
        </div>
        <div class="flex flex-items-center" v-if="login">
          <div iconfont button class="notice theme_1 ml20">&#xe603;</div>
          <img button class="profile ml20 bd" src="@/assets/image/test.png" />
        </div>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  data(){
    return { login: true }
  },

  methods: {
    WriteArticle(){},
    loginHandle(){}
  }
};
</script>

<style lang="scss" scoped>
.logo {
  width: 104px;
  background: url('@/assets/image/icon/logo-theme.png') no-repeat left;
  background-size: 100%;
  font-size: 0;
}
.profile {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
</style>
