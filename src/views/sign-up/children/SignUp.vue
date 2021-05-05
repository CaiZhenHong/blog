 <!--
 * @desc: 注册页面
 * @author czh996.top
 * @Date: 2021年4月7日
 -->
<template>
  <div class="sign-up">
    <!-- Logo Start -->
    <div class="sign-up-logo">
      <base-logo></base-logo>
    </div>
    <!-- Logo End -->

    <form class="sign-up-form">
      <!-- 邮箱 Start -->
      <base-input class="email-input" placeholder="邮箱" v-model="email">
        <template #pre>&#xe648;</template>
      </base-input>
      <div class="error iconfont">
        <div v-show="emailError && email">&#xe635; {{ emailError }}</div>
      </div>
      <!-- 邮箱 End -->

      <!-- 密码 Start -->
      <base-input
        class="password-input"
        placeholder="密码"
        type="password"
        v-model="password"
      >
        <template #pre>&#xe644;</template>
      </base-input>
      <div class="error iconfont">
        <div v-show="passwordError && password">
          &#xe635; {{ passwordError }}
        </div>
      </div>
      <!-- 密码 End -->

      <base-button
        class="sign-up-button"
        :to="{ name: 'sign-up-loading', params: { email, password } }"
        :shade="shade"
      >
        注册
      </base-button>
    </form>

    <!-- 其他选项 Start -->
    <div class="sign-up-help">
      <base-link class="to-login" to="/login">快速登录</base-link>
      <base-link class="to-forget" to="/login">忘记密码</base-link>
    </div>
    <!-- 其他选项 End -->
  </div>
</template>

<script>
import { BaseLogo, BaseInput, BaseButton, BaseLink } from '@/components/base';
import { post_send_email } from '@/services/user';
import md5 from 'md5';

export default {
  components: {
    BaseLogo,
    BaseInput,
    BaseButton,
    BaseLink,
  },

  data: function () {
    return {
      email: '',
      password: '',
    };
  },

  computed: {
    // @return 邮箱格式错误提示
    emailError: function () {
      return this.checkEmail(this.email);
    },

    // @return 密码格式错误提示
    passwordError: function () {
      return this.checkPassword(this.password);
    },

    // @return 遮罩层是否显示
    shade: function () {
      return Boolean(this.emailError + this.passwordError);
    },
  },

  methods: {
    /** 表单验证 - 邮箱
     * @method  checkEmail
     * @param {string} email - 邮箱
     * @return {boolean} 是否通过验证
     */
    checkEmail: function (email) {
      return /^[\w]+@+[a-z0-9]+.+[a-z]+$/g.test(email)
        ? ''
        : '请输入正确的邮箱';
    },

    /** 表单验证 - 密码
     * @method  checkPassword
     * @param {string} password - 密码
     * @return {boolean} 是否通过验证
     */
    checkPassword: function (password) {
      return /\s/g.test(password)
        ? '密码不能出现空白字符'
        : password.length < 6
        ? '密码需为 6 位以上的字符'
        : password.length > 25
        ? '密码长度限制 25 个字符'
        : '';
    },
  },

  // 组件路由守卫，监听注册按钮,成功则跳转到等待注册页面
  beforeRouteLeave: function (to, from, next) {
    from;
    if (to.path === '/sign-up/loading') {
      post_send_email(this.email, md5(this.password)).then((data) => {
        data.code === 200 ? next() : next(false);
      });
    } else {
      next();
    }
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.sign-up {
  @include _box();
  @include _flex(vrc);
  width: 400px;
  height: 600px;
  margin: 100px auto;
}

.sign-up-logo {
  margin-top: 100px;
}

.sign-up-form {
  margin-top: 100px;
  .email-input {
    width: 310px;
    height: 38px;
  }
  .password-input {
    @extend .email-input;
  }
  .sign-up-button {
    @extend .email-input;
    .sign-up-link {
      width: 100%;
      height: 100%;
    }
  }
}

.error {
  font-size: 12px;
  height: 20px;
  width: 310px;
  margin: 0 auto;
  margin-top: 5px;
  color: red;
}

.sign-up-help {
  display: flex;
  justify-content: center;
  margin-top: 130px;
  .to-login {
    color: #0000ff;
    font-size: 12px;
    cursor: pointer;
  }
  .to-forget {
    @extend .to-login;
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px solid #0000ff;
  }
}
</style>