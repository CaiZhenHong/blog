 <!--
  * @desc: router-link 封装
  * @author czh996.top
  * @Date: 2021年4月2日
  * @props: to -要跳转的链接
  * @example
  *   <el-link to="/login"><div>登录</div></el-link> 
 -->
<template>
  <div>
    <router-link :to="to" custom v-slot="{ navigate }">
      <div @click="navigate" class="el-link">
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

.el-link {
  width: 100%;
  height: 100%;
  @include _flex();
  justify-content: center;
}
</style>