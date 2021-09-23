<template>
  <div class="fit-width fit-height flex flex-column bg-gray_4">
      <TopBar class="h55" />
      <div class="flex-2 fcenter flex-column">
        <div class="f32 blod black_2">抱歉，页面无法访问…</div>
        <div class="gray_1 mt20 f17">页面链接可能已失效或被删除</div>
      </div>
      <div class="bg flex-3"><div class="bg2 fit-width fit-height"></div></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.bg {
  background-image: linear-gradient(to top, #4745a8, $gray_4);
  background-size: 50%;
  }
.bg2 {
  background: url('@/assets/image/bg1.png') center no-repeat;
  background-size: 40%;
}
</style>
