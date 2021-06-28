 <!--
 * @desc: 输入框组件
 * @author czh996.top
 * @Date: 2021年4月3日
 * @prop: { Strting } [type="text"] -输入框类型
 * @prop: { Strting } placeholder -提示
 * @prop: { Strting } value - 输入框的值
 * @example
 *  <base-input type='password' placehodle='请输入密码' v-model='pwd'>
      <template #pre>前置文字/图标</template>
      <template #suf>后置文字/图标</template>
    </base-input>
 -->

<template>
  <div :class="['base-input', { 'base-input-focus': focusHandle }]">
    <!-- 前置盒子 -->
    <div
      :class="[
        'base-input__prefix',
        'iconfont',
        { 'base-input__prefix-focus': focusHandle },
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
      autocomplete
    />

    <!-- 后置盒子 -->
    <div class="base-input__suffix">
      <slot name="suf"></slot>
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
    placeholder: String,
    value: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@app';
@import '@theme';
.base-input {
  position: relative;
  @include _box($bdc: #d9d9d9);
  @include _flex();
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
  background: #ffffff;
  color: #6b6b6b;
  &:hover {
    border-color: $themec;
  }
}
.base-input-focus {
  border-color: $themec;
  box-shadow: 0 0 3px 0 $themec;
  color: #333;
  background: #fff;
}

.input {
  flex: 1;
  height: 100%;
  border: none;
  border-radius: 4px;
  letter-spacing: 1px;
  background: inherit;
  color: inherit;
  &::placeholder {
    font-size: 12px;
    color: #808080;
    letter-spacing: 1px;
  }
}

.base-input__prefix {
  @include _flex();
  justify-content: center;
  height: 100%;
  padding: 0 8px;
  color: #808080;
}
.base-input__prefix-focus {
  font-weight: 700;
}

.base-input__suffix {
  height: 100%;
}
</style>