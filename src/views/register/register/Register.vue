 <!--
 * @desc: 注册页面
 * @author czh996.top
 * @Date: 2021年4月16日
 -->
<template>
  <div class="register">
    <!-- Logo Start -->
    <div class="register-logo">
      <base-logo></base-logo>
    </div>
    <!-- Logo End -->

    <!-- 注册表单组件 Start -->
    <div class="register-form">
      <register-form></register-form>
    </div>
    <!-- 注册表单组件 End -->

    <!-- 注册帮助组件 Start -->
    <div class="register-help">
      <register-help></register-help>
    </div>
    <!-- 注册帮助组件 End -->
  </div>
</template>

<script>
import { BaseLogo } from '@/components/base';
import { RegisterForm, RegisterHelp } from '@/modules/register';

export default {
  components: {
    BaseLogo,
    RegisterForm,
    RegisterHelp,
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.register {
  @include _box();
  width: 400px;
  height: 600px;
  margin: 100px auto;
}

.register-logo {
  @include _flex(vrc);
  margin-top: 100px;
}

.register-form {
  margin-top: 100px;
}

.register-help {
  margin-top: 100px;
}
</style>