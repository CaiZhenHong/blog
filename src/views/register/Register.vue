 <!--
 * @desc: 注册页面
 * @author czh996.top
 * @Date: 2021年4月16日
 -->
<template>
  <div class="register">
    <!-- Logo Start -->
    <div class="register-logo">
      <logo></logo>
    </div>
    <!-- Logo End -->

    <!-- 注册信息输入框组件 Start -->
    <div class="register-input">
      <register-input></register-input>
    </div>
    <!-- 注册信息输入框组件 End -->

    <!-- 注册帮助组件 Start -->
    <div class="register-help">
      <register-help></register-help>
    </div>
    <!-- 注册帮助组件 End -->
  </div>
</template>

<script>
import Logo from '@/components/Logo/Logo';
import { RegisterInput, RegisterHelp } from '@/modules/register';

export default {
  components: {
    Logo,
    RegisterInput,
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

.register-input {
  margin-top: 100px;
}

.register-help {
  margin-top: 100px;
}
</style>