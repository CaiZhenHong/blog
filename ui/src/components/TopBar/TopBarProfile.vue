<template>
    <my-pop class="ml20">
        <img button class="profile bd" src="@/assets/image/test.png" slot="trigger" />
        <ul>
            <li class="pl20 pr20 pt10 pb10 mt10 f14 black_2 hover-gray_3" button v-for="({ text, icon, fn }, index) in model" :key="index" @click="itemClickHandle(fn)">
            <span iconfont v-html="icon" class="gray_1 f16 mr5" ></span>
            {{text}}
            </li>
        </ul>
    </my-pop>
</template>

<script>
export default {
  data:function(){
    return { 
      model:[
        { icon:'&#xe605;',text:'个人主页',fn:'' },
        { icon:'&#xe631;',text:'账户设置',fn:'' },
        { icon:'&#xe64b;',text:'English',fn:'' },
        { icon:'&#xe643; ',text:'提交建议',fn:'' },
        { icon:'&#xe60b;',text:'退出登录',fn:'logout' },
      ]
     }
  },

  methods:{
        itemClickHandle(fn){
      switch (fn) {
        case 'logout':
          this.$store.dispatch('user/logout')
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.profile {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
</style>
