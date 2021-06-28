 <!--
 * @desc: 水平三栏布局
 * @author czh996.top
 * @Date: 2021-03-12
 -->
<template>
  <div class="g-row">
    <slot name="left">
      <div class="g-left"></div>
    </slot>

    <slot class="middle" name="middle"></slot>

    <slot name="right">
      <div class="g-right"></div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style scoped lang='scss'>
.g-row {
  display: flex;
  flex-direction: row;
}
.g-left,
.g-right {
  flex: 1;
}
</style>