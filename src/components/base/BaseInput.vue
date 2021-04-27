 <!--
 * @desc: 登录信息输入
 * @author czh996.top
 * @Date: 2021年4月3日
 * @example
 *  <article-item-comment-button :actions="actions" :shareBtnShow="shareBtnShow"></article-item-comment-button>
 -->

<template>
  <div
    :class="['el-input', { 'el-input-focus': focusHandle }]"
    :style="`width:${size.split(',')[0]}px;height:${size.split(',')[1]}px`"
  >
    <!-- 前置盒子 -->
    <div
      :class="[
        'el-input__prefix',
        'iconfont',
        { 'el-input__prefix-focus': focusHandle },
      ]"
    >
      <slot name="pre"></slot>
    </div>

    <input
      class="input"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      @input="inputHandle"
      @focus="focusHandle = true"
      @blur="focusHandle = false"
    />

    <!-- 后置盒子 -->
    <div class="el-input__suffix">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElInput',

  data() {
    return {
      focusHandle: false,
    };
  },

  methods: {
    inputHandle(event) {
      this.$emit('input', event.target.value);
    },
  },

  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {},
    size: {
      type: String,
      default: '300,32',
    },
    value: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@app';
@import '@theme';
.el-input {
  position: relative;
  @include _box($bdc: #b4b2b2);
  @include _flex();
  box-sizing: border-box;
  letter-spacing: 1px;
  &:hover {
    border-color: $themec;
  }
}
.el-input-focus {
  border-color: $themec;
  box-shadow: 0 0 3px 0 $themec;
}

.input {
  flex: 1;
  height: 100%;
  border: none;
  border-radius: 4px;
  letter-spacing: 1px;
  &::placeholder {
    font-size: 12px;
    color: #808080;
    letter-spacing: 1px;
  }
}

.el-input__prefix {
  @include _flex();
  justify-content: center;
  width: 35px;
  height: 100%;
  color: #808080;
}
.el-input__prefix-focus {
  font-weight: 700;
}

.el-input__suffix {
  height: 100%;
}
</style>