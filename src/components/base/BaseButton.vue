 <!--
 * @desc: 按钮元素
 * @author czh996.top
 * @Date: 2021年4月2日
 * @prop: to - 要跳转的链接
 * @prop: type - 按钮样式选择：theme 和 grey
 * @prop: size - 按钮大小：长，宽
 * @example <base-button to="home" type="grey" size="200,50">登录</base-button>
 *    
 -->

<template>
  <div>
    <base-link
      :style="`width:${size.split(',')[0]}px;height:${size.split(',')[1]}px`"
      :to="to"
      :class="['base-button', type]"
    >
      <slot></slot>
    </base-link>
  </div>
</template>

<script>
import { BaseLink } from './index.js';

export default {
  components: { BaseLink },

  props: {
    to: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      default: 'theme',
    },
    size: {
      type: String,
      default: '80,35',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@app';
@import '@theme';

.base-button {
  @include _flex();
  @include _box($bdc: #d9d9d9);
  justify-content: center;
  box-sizing: border-box;
  font-size: 15px;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.theme {
  color: #fff;
  background: $themec;
  &:hover {
    background: #fdac33;
    border-color: #fdac33;
  }
}
.grey {
  color: #555;
  background: #f9f9f9;
  &:hover {
    border-color: #fdac33;
    color: #fdac33;
  }
}
</style>