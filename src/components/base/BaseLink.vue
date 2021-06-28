 <!--
  * @desc: router-link 封装
  * @author czh996.top
  * @Date: 2021年4月2日
  * @props:{String|Object} to -要跳转的链接
  * @example
  *   <base-link to="/login"><div>登录</div></base-link> 
 -->
<template>
  <div>
    <router-link :to="to" custom v-slot="{ navigate }" replace>
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
}
</style>