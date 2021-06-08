<template>
  <div class="articles">
    <div class="tab">
      <base-link
        to="new"
        class="tab-item"
        :class="{ active: /\/new$/.test(this.$route.path) }"
        >最近</base-link
      >
      <base-link
        to="catlog"
        class="tab-item"
        :class="{ active: /\/catlog$/.test(this.$route.path) }"
        >目录</base-link
      >
      <div
        class="tab-item__active"
        :class="{
          'tab-item__active--catlog': /\/catlog$/.test(this.$route.path),
        }"
      ></div>
    </div>

    <keep-alive>
      <router-view class="tab-content"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { BaseLink } from '@/components/base';

export default {
  components: {
    BaseLink,
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';
.articles {
  width: 100%;
  @include _box();
}

.tab {
  height: 50px;
  display: flex;
  border-bottom: 1px solid $bdc;
  font-size: 16px;
  position: relative;
  .tab-item {
    height: 100%;
    width: 60px;
    text-align: center;
    margin-left: 50px;
    line-height: 50px;
    cursor: pointer;
    color: rgb(117, 117, 117);
    @include _hover(rgb(49, 49, 49));
  }
  .active {
    color: #000;
  }
  .tab-item__active {
    margin-left: 50px;
    bottom: 0;
    position: absolute;
    width: 60px;
    height: 2px;
    background: $themec;
    transition: all 0.4s 0s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .tab-item__active--catlog {
    transform: translateX(110px);
  }
}

.tab-content {
  height: 100%;
  width: 100%;
}

@keyframes slide-in-right {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>