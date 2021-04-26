 <!--
 * @desc: 其他官网链接
 * @author czh996.top
 * @Date: 2021年4月6日
 -->
<template>
  <div class="iconfont">
    <!-- 链接 Start -->
    <a
      class="profile-icon"
      @mouseenter="enterHandle"
      @mouseleave="enterHandle"
      v-html="item.icon"
      :href="item.link"
      target="blank"
      @click="clickHandle"
      :style="{ cursor: iSwechat ? 'default' : 'pointer' }"
    ></a>
    <!-- 链接 End -->

    <!-- 气泡弹窗 Start -->
    <transition name="slide">
      <popover class="profile-popover" v-show="showHandle">
        <div>{{ item.name }}</div>
        <img v-if="iSwechat" :src="item.link" class="popover-img" alt="" />
      </popover>
    </transition>
    <!-- 气泡弹窗 End -->
  </div>
</template>

<script>
import Popover from '@/components/popover/Popover.vue';

export default {
  components: { Popover },

  data() {
    return {
      showHandle: false, // 气泡弹窗开关
    };
  },

  props: ['item'],

  methods: {
    // 控制气泡显示/隐藏
    enterHandle(e) {
      this.showHandle = e.type === 'mouseenter' ? true : false;
    },
    // 禁用默认点击事件
    clickHandle(e) {
      if (this.iSwechat) {
        e.preventDefault();
      }
    },
  },

  computed: {
    // 判断是否为微信
    iSwechat() {
      if (this.item.name === '扫一扫添加我微信') {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.profile-icon {
  width: 30px;
  height: 30px;
  border: 1px solid hsla(0, 0%, 0%, 0);
  border-radius: 50%;
  font-size: 27px;
  margin-left: 20px;
  line-height: 30px;
  text-align: center;
  color: #525252;
  @include _hover(#8d8d8d);
}
.profile-popover {
  margin-left: 15px;
}
.popover-img {
  height: 200px;
}
.slide-enter-active {
  animation: slide-in-top 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-leave-active {
  animation: slide-in-top 0.05s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse;
}

@keyframes slide-in-top {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>