 <!--
 * @desc: 登录信息输入
 * @author czh996.top
 * @Date: 2021年4月7日
 * @example
 *  <article-item-comment-button :actions="actions" :shareBtnShow="shareBtnShow"></article-item-comment-button>
 -->
<template>
  <div>
    <div>
      <el-input
        class="email-input"
        size="310,38"
        placeholder="邮箱"
        v-model.lazy="email"
      >
        <template #pre>&#xe648;</template>
      </el-input>
    </div>

    <div class="error-msg iconfont">
      <div v-show="errors[0]">&#xe635; {{ errors[0] }}</div>
    </div>

    <el-input
      class="password-input"
      size="310,38"
      placeholder="密码"
      type="password"
      v-model="pwd"
    >
      <template #pre>&#xe644;</template>
    </el-input>
    <div class="error-msg iconfont">
      <div v-show="errors[1]">&#xe635; {{ errors[1] }}</div>
    </div>

    <div class="login-btn">
      <el-shade v-if="shade"></el-shade>
      <el-button to="/m" size="310,38">注册</el-button>
    </div>
  </div>
</template>
 
<script>
import { ElInput, ElButton, ElShade } from '@/components/element';

export default {
  components: {
    ElInput,
    ElButton,
    ElShade,
  },

  data() {
    return {
      email: '',
      pwd: '',
      errors: [],
      shade: true,
    };
  },

  watch: {
    email(value) {
      let regular = /^[\w]+@+[a-z0-9]+.+[a-z]+$/g;
      this.errors[0] = regular.test(value) ? '' : '请输入正确的邮箱';
      this.shade = this.errors[0] + this.errors[1];
    },

    pwd(value) {
      if (!/^\S{6,}$/g.test(value)) {
        this.errors[1] = '需为 6 位以上的非空白字符';
      } else if (/^\S{25,}$/g.test(value)) {
        this.errors[1] = '密码长度限制 25 个字符';
      } else {
        this.errors[1] = '';
      }
      this.shade = this.errors[0] + this.errors[1];
    },
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.email-input,
.password-input,
.login-btn {
  position: relative;
  width: 310px;
  height: 38px;
  margin: 0 auto;
  font-size: 60px;
}
.login-btn {
  margin-top: 20px;
}
.error-msg {
  font-size: 12px;
  height: 20px;
  width: 310px;
  margin: 0 auto;
  margin-top: 5px;
  color: red;
}
</style>