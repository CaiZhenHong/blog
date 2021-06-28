<!--
    @desc 模板 
    @props
    @emit   
    @date
    @author caizhenhong
 -->
<template>
  <top-bar class="top-bar"> <div class="search"></div></top-bar>
</template>

<script>
import TopBar from '@/components/content/TopBar/TopBar.vue';

export default {
  components: {
    TopBar,
  },
};
</script>

<style lang="scss" scoped>
@import '@theme';

.search {
  width: 300px;
  height: 32px;
  margin-left: 50px;
  background: blue;
}
</style>