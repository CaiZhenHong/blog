 <!--
 * @desc: 按钮组件
 * @author czh996.top
 * @Date: 2021年4月2日
 * @prop: {String} [type='theme'] - 按钮样式选择：theme 和 grey
 * @prop: {Boolean} [shade=false] - 控制遮罩层显示与隐藏
 * @prop: {String|Object} [to=''] - 控制路由跳转
 * @Event: {@click}  - 监听 base-button 的点击事件
 * @example
 *      <base-button :shade='isShow' @clich='loginHandle' >登录</base-button>
 *    
 -->

<template>
  <div class="base-button">
    <div :class="['button', type]" @click="clickHandle">
      <slot v-if="!to"></slot>

      <base-link class="button-link" v-else :to="to"><slot></slot></base-link>
    </div>
    <base-shade v-show="shade"></base-shade>
  </div>
</template>

<script>
import { BaseShade, BaseLink } from './index';

export default {
  components: { BaseShade, BaseLink },

  props: {
    type: {
      type: String,
      default: 'theme',
    },

    shade: {
      type: Boolean,
      default: false,
    },

    to: {
      default: '',
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
.button-link {
  width: 100%;
  height: 100%;
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