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
  <div class="register">
    <div class="register-logo">
      <logo></logo>
    </div>

    <div class="register-input">
      <register-input></register-input>
    </div>

    <div class="register-help">
      <register-help></register-help>
    </div>
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