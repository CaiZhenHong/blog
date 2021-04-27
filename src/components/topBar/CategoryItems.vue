 <!--
 * @desc: 
 * @author czh996.top
 * @Date: 2021年4月2日
 -->
<template>
  <div
    class="category-items"
    @mouseenter="enterHandle"
    @mouseleave="enterHandle"
  >
    <!-- 文章类别 -->
    <div class="category-items-name"><slot></slot></div>

    <!-- 气泡弹出框 Start -->
    <transition name="slide">
      <base-popover
        class="category-items-content"
        v-show="showHandle"
        :list="items"
      ></base-popover>
    </transition>
    <!-- 气泡弹出框 End -->
  </div>
</template>

<script>
import { BasePopover } from '@/components/base';

export default {
  components: {
    BasePopover,
  },

  props: {
    items: {
      type: Array, // 气泡弹出窗列表
    },
  },

  data() {
    return {
      showHandle: false, // 显示隐藏助手
    };
  },

  methods: {
    // 控制显示/隐藏
    enterHandle(e) {
      this.showHandle = e.type === 'mouseenter' ? true : false;
    },
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.category-items {
  position: relative;
  float: left;
  font-size: 16px;
  margin-right: 25px;
  transition: all 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.category-items-name {
  color: #777;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    color: #000;
  }
}

.slide-enter-active {
  animation: slide-in-top 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-leave-active {
  animation: slide-in-top 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse;
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