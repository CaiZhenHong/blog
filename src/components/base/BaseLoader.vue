 <!--
 * @desc: 按钮遮罩
 * @author czh996.top
 * @Date: 2021年4月23日
 * @example
 *  <base-shade></base-shade>
 -->
<template>
  <div class="shade"></div>
</template>

<script>
export default {
  name: '',
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.shade {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.411);
}
</style>