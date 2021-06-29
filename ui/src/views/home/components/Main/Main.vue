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
    <main-content class="content"></main-content>
  </div>
</template>

<script>
import MainProfile from './MainProfile/MainProfile.vue';
import MainContent from './MainContent/MainContent.vue';
export default {
  components: {
    MainProfile,
    MainContent,
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
  height: 40rem;
  background: blue;
}
.content {
  flex: 1;

  background: blue;
  margin-top: 15px;
}
</style>