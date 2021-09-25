<template>
  <div class="page">
    <div class="f14 bdb pt10 pb10 pl20 pr20 black_2">我的链接</div>
    <ul v-if="icons && icons.length" class="mt20 flex flex-start flex-wrap">
      <li  class="flex flex-column flex-items-center icon  mb20" v-for="({ name, url }, index) in icons" :key="index">
        <my-pop>
        <div button slot="trigger" iconfont class="w40 h40 bd" :class="[`icon_${name}`]" @click="to(url)"></div>
        <div class="f12 black_2 pl5 pr5">{{name|iconFormat}}</div>
        </my-pop>
      </li>
    </ul>
    <div class="fcenter flex-column mt20 mb20" v-else>
      <div class="fit-width h100  empty"></div>
      <div class="f16 gray_3">暂无链接</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    icons: function(){ return this.$store.state.user.info.links },
  },
  methods: {
    to: function(to){window.open(to)}
  }
};
</script>

<style lang="scss" scoped>
.icon{
  width: 25%;
}
</style>
