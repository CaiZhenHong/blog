 <!--
 * @desc: 气泡弹出框
 * @author czh996.top
 * @Date: 2021年4月2日
 -->
<template>
  <div>
    <transition name="popover">
      <div class="popover" v-show="show">
        <div class="popover-arrow"></div>
        <div class="popover-inner">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template> 

<script>
export default {
  name: 'Popover',

  props: {
    show: { type: Boolean, default: false },
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.popover {
  position: absolute;
  font-size: 13px;
  letter-spacing: 1px;
}
.popover-arrow {
  z-index: 2;
  position: relative;
  bottom: -11px;
  left: 10px;
  width: 0;
  height: 0;
  border: 9px solid #fff;
  box-shadow: -3px -3px 5px -3px rgba(133, 132, 132, 0.473);
  transform: rotate(45deg);
}

.popover-inner {
  position: relative;
  z-index: 1;
  @include _box();
  padding: 12px 0;
  background: #fff;
  box-shadow: 2px 2px 10px rgba(133, 132, 132, 0.473);
}

.popover-enter,
.popover-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
.popover-enter-to,
.popover-leave {
  transform: translateY(0);
  opacity: 1;
}
.popover-enter-active,
.popover-leave-active {
  transition: all 0.2s;
}
</style>