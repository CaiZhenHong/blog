 <!--
 * @desc: 文章操作及信息
 * @author czh996.top
 * @Date: 2021年4月16日
 * @props: [Obejct] ations - 用于渲染操作列表的数据
 * @props: [Boolean] shareBtnShow - 控制分享按钮隐藏显示
 * @example
 *  <article-item-comment-button :actions="actions" :shareBtnShow="shareBtnShow"></article-item-comment-button>
 -->
<template>
  <div class="login">
    <div class="login-logo">
      <base-logo></base-logo>
    </div>

    <div class="login-input">
      <login-input></login-input>
    </div>

    <div class="login-help">
      <login-help></login-help>
    </div>
  </div>
</template>

<script>
import { BaseLogo } from '@/components/base';
import { loginInput, loginHelp } from '@/modules/login';

export default {
  components: {
    BaseLogo,
    loginInput,
    loginHelp,
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.login {
  @include _box();
  width: 400px;
  height: 600px;
  margin: 100px auto;
}

.login-logo {
  @include _flex(vrc);
  margin-top: 100px;
}

.login-input {
  margin-top: 100px;
}

.login-help {
  margin-top: 140px;
}
</style>