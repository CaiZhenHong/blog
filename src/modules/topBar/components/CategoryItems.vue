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
    <transition name="fade">
      <popover
        class="category-items-content"
        v-show="showHandle"
        :list="items"
      ></popover>
    </transition>
    <!-- 气泡弹出框 End -->
  </div>
</template>

<script>
import Popover from '@/components/popover/Popover';

export default {
  components: {
    Popover,
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
  &:hover {
    color: #000;
  }
}
.category-items-content {
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>