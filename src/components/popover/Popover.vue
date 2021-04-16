 <!--
 * @desc: 气泡弹出框
 * @author czh996.top
 * @Date: 2021年4月2日
 -->
<template>
  <div class="popover">
    <div class="popover-arrow"></div>
    <div class="popover-inner">
      <div class="popover-item" v-for="(item, key) in list" :key="key">
        <slot>
          {{ item }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popover',

  props: {
    list: {
      default() {
        return 1;
      },
    },
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
  bottom: -9px;
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
.popover-item {
  padding: 5px 15px;
  line-height: 1.5;
  word-break: keep-all;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: $themec;
    color: #fff;
  }
}
</style>