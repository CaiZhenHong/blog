<!--
    @desc 模板 
    @props
    @emit   
    @date
    @author caizhenhong
 -->
<template>
  <div class="main">
    <main-profile class="main-profile"></main-profile>
    <div class="content"></div>
  </div>
</template>

<script>
import MainProfile from './MainProfile/MainProfile.vue';
export default {
  components: {
    MainProfile,
  },
};
</script>

<style lang="scss" scoped>
@import '@theme';
.main {
  max-width: 1000px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main-profile {
  width: 100%;
  height: 400px;
  background: blue;
  @media screen and (max-width: 700px) {
    height: 150px;
  }
}
.content {
  flex: 1;
  height: 100%;
  background: blue;
  margin-top: 15px;
}
</style>