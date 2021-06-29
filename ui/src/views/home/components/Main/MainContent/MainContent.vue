<!--
    @desc 模板 
    @props
    @emit   
    @date
    @author caizhenhong
 -->
<template>
  <div class="main-content">
    <div class="new-bar"></div>
    <div class="new-list">
      <main-content-new class="new-item">123</main-content-new>
      <main-content-new class="new-item">123</main-content-new>
      <main-content-new class="new-item">123</main-content-new>
      <main-content-new class="new-item">123</main-content-new>
      <main-content-new class="new-item">123</main-content-new>
      <main-content-new class="new-item">123</main-content-new>
      <main-content-new class="new-item">123</main-content-new>
      <main-content-new class="new-item">123</main-content-new>
      <main-content-new class="new-item">123</main-content-new>
      <main-content-new class="new-item">123</main-content-new>
      <main-content-new class="new-item">123</main-content-new>
    </div>
  </div>
</template>

<script>
import MainContentNew from './views/MainContentNew/MainContentNew.vue';
export default {
  components: {
    MainContentNew,
  },
};
</script>

<style lang="scss" scoped>
@import '@theme';
.main-content {
}
.new-bar {
  height: 40px;
  background: saddlebrown;
  margin: 0 10px;
}
.new-list {
  margin: 0 10px;
}
.new-item {
  height: 20rem;
  width: 100%;
  padding: 24px 0;
  border-bottom: 1px solid red;
  background: yellow;
  &:last-child {
    border-bottom: 1px solid rgba(255, 0, 0, 0);
  }
}
</style>