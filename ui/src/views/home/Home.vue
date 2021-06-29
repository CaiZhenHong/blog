<!--
    @desc 模板 
    @props
    @emit   
    @date
    @author caizhenhong
 -->
<template>
  <div class="home">
    <top-bar class="top-bar"></top-bar>
    <home-main class="main"></home-main>
  </div>
</template>

<script>
import TopBar from './components/TopBar/TopBar.vue';
import HomeMain from './components/Main/Main.vue';

export default {
  components: {
    TopBar,
    HomeMain,
  },
};
</script>

<style lang="scss" scoped>
@import '@theme';

.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background: salmon;
}
.top-bar {
  width: 100%;
  height: 55px;
  background: forestgreen;
  border-bottom: 1px solid $border-color;
}
.main {
  flex: 1;
  width: 100%;
  margin-top: 15px;
  background: red;
  @media screen and (max-width: 700px) {
    margin-top: 0;
  }
}
</style>