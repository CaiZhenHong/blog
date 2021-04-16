 <!--
 * @desc: 按钮元素
 * @author czh996.top
 * @Date: 2021年4月2日
 -->

<template>
  <div>
    <router-link
      :class="['el-button', type]"
      :to="to"
      custom
      v-slot="{ navigate }"
    >
      <div @click="navigate"><slot></slot></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ElButton',

  props: {
    to: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      default: 'theme',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@app';
@import '@theme';

.el-button {
  @include _flex();
  @include _box($bdc: #d9d9d9);
  justify-content: center;
  box-sizing: border-box;
  width: 80px;
  height: 35px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.theme {
  color: #fff;
  background: $themec;
  &:hover {
    background: #fdac33;
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