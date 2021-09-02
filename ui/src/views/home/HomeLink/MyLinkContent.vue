  <!--
 * @description 模板
 * @Date 日期
 -->
<template>
  <div class="my-link-content">
    <div
      class="item-warp"
      v-for="({ icon, url }, index) in myLinks"
      :key="index"
    >
      <a :class="[icon, 'item']" :href="url"> </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    myLinks: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@theme';
.my-link-content {
  display: flex;
  justify-content: space-between;
}
.item-warp {
  width: 25%;
  display: flex;
  justify-content: center;
}
.item {
  margin: 12px 0 6px 0;
  &::before {
    border: 1px solid transparent;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border-radius: 2px;
  }
  &:hover {
    &::before {
      transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      color: $theme-color;
      background: #fff;
      border-color: $theme-color;
    }
  }
}
</style>