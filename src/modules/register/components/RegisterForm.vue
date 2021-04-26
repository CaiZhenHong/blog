 <!--
 * @desc: 注册表单
 * @author czh996.top
 * @Date: 2021年4月7日
 * @example
 *      <register-form></register-form>
 -->
<template>
  <div>
    <form>
      <!-- 邮箱输入框 Start -->
      <div>
        <el-input
          class="email-input"
          size="310,38"
          placeholder="邮箱"
          v-model="email"
        >
          <template #pre>&#xe648;</template>
        </el-input>
      </div>
      <!-- 邮箱输入框 End -->

      <!-- 邮箱错误提示 Start -->
      <div class="error-msg iconfont">
        <div v-show="errors[0]">&#xe635; {{ errors[0] }}</div>
      </div>
      <!-- 邮箱错误提示 End -->

      <!-- 密码输入框 Start -->
      <el-input
        class="password-input"
        size="310,38"
        placeholder="密码"
        type="password"
        v-model="pwd"
      >
        <template #pre>&#xe644;</template>
      </el-input>
      <!-- 密码输入框 End -->

      <!-- 密码错误提示框 Start -->
      <div class="error-msg iconfont">
        <div v-show="errors[1]">&#xe635; {{ errors[1] }}</div>
      </div>
      <!-- 密码错误提示框 End-->

      <!-- 登录按钮 Start -->
      <div class="login-btn">
        <el-shade v-if="shade"></el-shade>
        <el-button to="/register/loading" size="310,38">注册</el-button>
      </div>
      <!-- 登录按钮 End -->
    </form>
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
      email: '', // 邮箱
      pwd: '', // 密码
      errors: [], // 错误数组，[0]为邮箱错误信息，[1]为密码错误信息
      shade: true, // 遮罩是否显示
    };
  },

  methods: {
    // 邮箱验证
    emailValidation(value) {
      let regular = /^[\w]+@+[a-z0-9]+.+[a-z]+$/g;
      this.errors[0] = regular.test(value) ? '' : '请输入正确的邮箱';
      this.shade = this.errors[0] + this.errors[1]; // 当错误数据中数据为空字符串时，遮罩层隐藏
    },

    // 密码验证
    pwdValidation(value) {
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

  // 监听email和pwd数据的输入，做表单验证
  watch: {
    email(value) {
      this.emailValidation(value);
    },

    pwd(value) {
      this.pwdValidation(value);
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