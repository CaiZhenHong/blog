 <!--
 * @desc: 登录信息输入
 * @author czh996.top
 * @Date: 2021年4月7日
 * @example
 *  <article-item-comment-button :actions="actions" :shareBtnShow="shareBtnShow"></article-item-comment-button>
 -->
<template>
  <div>
    <el-input class="email-input" size="310,38" placeholder="邮箱">
      <template #pre>&#xe648;</template>
    </el-input>

    <el-input class="password-input" size="310,38" placeholder="密码">
      <template #pre>&#xe644;</template>
    </el-input>

    <el-button class="login-btn" to="/m" size="310,38"
      ><slot>登录</slot></el-button
    >
  </div>
</template>
 
<script>
import { ElInput, ElButton } from '@/components/base';

export default {
  components: {
    ElInput,
    ElButton,
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.email-input,
.password-input,
.login-btn {
  margin: 0 auto;
  margin-top: 20px;
  font-size: 60px;
}
.login-btn {
  margin-top: 40px;
}
</style>