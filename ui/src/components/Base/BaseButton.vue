 <!--
 * @description 模板
 * @Date 日期
 -->
<template>
  <div class="wrapper">
    <button :class="['base-button', type]">
      {{ text }}
    </button>
    <div class="mask" v-show="disable"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Button',
    },

    type: {
      type: String,
    },

    disable: {
      type: Boolean,
      default: false,
    },
  },
};
</script> 

<style lang="scss" scoped>
@import '@theme';
.wrapper {
  position: relative;
}
.base-button {
  padding: 6px 12px;
  border: 1px solid $theme-color;

  font-size: 12px;
  color: $theme-color;
  letter-spacing: 1.5px;

  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    color: $theme-color-hover;
    border-color: $theme-color-hover;
  }
}

.primary {
  background-color: $theme-color;
  color: #fff;

  &:hover {
    background-color: $theme-color-hover;
    color: #fff;
  }
}

.mask {
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  background-color: #80808062;
}
</style>