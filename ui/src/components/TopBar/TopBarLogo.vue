<template>
    <div button class="flex flex-items-center" @click="toHome">
        <h1 class="logo w32 h32">myblog</h1>
        <div class="theme_1 ml10 f22 blod">MYBLOG</div>
</div>
</template>

<script>
export default {
methods:{
    toHome(){ this.$router.push({name:'HomeArticleNew'}) },
}
}
</script>

<style lang="scss" scoped>
.logo {
  background: url('@/assets/image/icon/logo-theme.png') no-repeat left;
  background-size: 100%;
  font-size: 0;
}
</style>
