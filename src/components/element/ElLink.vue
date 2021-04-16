 <!--
 * @desc: router-link 封装
 * @author czh996.top
 * @Date: 2021年4月2日
 -->
<template>
  <div>
    <router-link :to="to" custom v-slot="{ navigate }">
      <div @click="navigate">
        <slot></slot>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    to: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';
</style>