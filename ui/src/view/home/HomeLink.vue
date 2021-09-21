<template>
  <div class="page">
    <div class="f14 bdb pt10 pb10 pl20 pr20 black_2">我的链接</div>
    <ul class="mt20 flex flex-start flex-wrap">
      <li  class="flex flex-column flex-items-center icon  mb20" v-for="({ name, url }, index) in icons" :key="index">
        <div button iconfont class="w40 h40 bd" :class="[`icon_${name}`]" @click="to(url)"></div>
        <div  class="f12 black_2 mt10">{{name|iconFormat}}</div>
      </li>
    </ul>
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
