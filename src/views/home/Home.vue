 <!--
 * @desc: 主页
 * @author czh996.top
 * @Date: 2021年4月6日
 -->
<template>
  <div class="home">
    <div class="left">
      <home-profile></home-profile>
    </div>
    <div class="middle">
      <home-article></home-article>
    </div>
    <div class="right">
      <home-profile></home-profile>
    </div>
  </div>
</template>

<script>
import { HomeProfile, HomeArticle } from '@/modules/home';

export default {
  components: {
    HomeProfile,
    HomeArticle,
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.home {
  display: flex;
  max-width: 1400px;
  margin: 10px auto;
}
.left,
.right {
  width: 325px;
}
.middle {
  flex: 1;
  padding: 0 10px;
}
</style>