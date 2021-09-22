<template>
  <div class="pt100">
    <div class="h550 w400 flex flex-column flex-items-center pl35 pr35 bg-white_1 bd center ">
      <div button class="flex flex-column flex-items-center" @click="toHome">
        <div  class="mt35"><img class="h64 w64" src="@/assets/image/icon/logo-theme.png" alt=""></div>
        <div  class="mt20 f30 black_1">MYBLOG</div>
      </div>
      <div class="black_2 f16 mt16">分享一切可以分享的</div>
      <div class="mt35 fit-width">
        <MyInput icon='&#xe652;' placeholder='用户名' v-model="userName" :verifyError='Boolean(userNameError)' />
        <MyInput icon='&#xe604;' class="mt16" type='password' v-model="password" placeholder='密码' :verifyError='Boolean(passwordError)' />
        <div class="mt10 mb10 f12 red_1 h20">{{ userNameError||passwordError||''}}</div>
      </div>
      <my-button primary big class="fit-width" @click="loginHandle">登录</my-button>
      <div class="flex flex-center f14 theme_1 mt120">
        <div button>找回密码</div>
        <span class="ml5 mr5">|</span>
        <div button>邮箱登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import { checkUserName, checkPassword } from '@/util/verification'

export default {
  data: function(){
    return { userName: 'asd',  password: 'dsadsads', userNameError: '', passwordError: ''}
  },
  methods: {
    toHome: function() { this.$router.push({name: 'HomeArticleNew'}) },
    loginHandle: function() {
      this.userNameError = checkUserName(this.userName)
      !this.userNameError && (this.passwordError = checkPassword(this.password))
      if(this.passwordError) return
      this.$store.dispatch('user/login',{count:this.userName, password:this.password})
    }
  },
}
</script>

<style>
</style>
