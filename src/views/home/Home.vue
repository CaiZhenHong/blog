 <!--
 * @desc: 主页
 * @author czh996.top
 * @Date: 2021年4月6日
 -->
<template>
  <div>
    <div class="top-bar-warp">
      <top-bar class="top-bar"></top-bar>
    </div>

    <div class="home">
      <div class="left">
        <home-profile></home-profile>
      </div>
      <div class="middle">
        <home-article></home-article>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import HomeProfile from './profile/HomeProfile';
import TopBar from '@/components/content/topBar/TopBar';
import { HomeArticle } from '@/modules/home';

export default {
  components: {
    HomeProfile,
    HomeArticle,
    TopBar,
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';
.top-bar-warp {
  border-bottom: 1px solid $bdc;
  background: $topBarG;
  .top-bar {
    max-width: 1400px;
    margin: 0 auto;
  }
}
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