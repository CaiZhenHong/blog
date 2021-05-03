 <!--
 * @desc: 按钮元素
 * @author czh996.top
 * @Date: 2021年4月2日
 * @prop: type - 按钮样式选择：theme 和 grey
 * @example <button @clicli="clickHandle" type="grey" :shade='false'>登录</button>
 *    
 -->

<template>
  <div class="base-button">
    <div :class="['button', type]" @click="clickHandle">
      <slot></slot>
    </div>
    <base-shade v-show="false"></base-shade>
  </div>
</template>

<script>
import { BaseShade } from './index';

export default {
  components: { BaseShade },

  props: {
    type: {
      type: String,
      default: 'theme',
    },

    shade: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    clickHandle: function () {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@app';
@import '@theme';
.base-button {
  position: relative;
  width: 100%;
  height: 100%;
}
.button {
  @include _flex();
  @include _box($bdc: #d9d9d9);
  position: relative;
  width: 100%;
  height: 100%;
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