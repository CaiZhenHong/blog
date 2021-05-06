 <!--
 * @desc: 注册页面
 * @author czh996.top
 * @Date: 2021年4月7日
 -->
<template>
  <div class="sign-up" @keyup.enter="signUpHandle">
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
        <transition :name="isAnimation ? 'error' : 'false'">
          <div v-show="emailError && email">&#xe635; {{ emailError }}</div>
        </transition>
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
        <transition :name="isAnimation ? 'error' : 'false'">
          <div v-show="passwordError && password">
            &#xe635; {{ passwordError }}
          </div>
        </transition>
      </div>
      <!-- 密码 End -->

      <!-- 登录按钮 Start -->
      <base-button class="sign-up-button" @click="signUpHandle" :shade="shade">
        <span v-if="!loader">注册</span>
        <base-loader v-else color="#fff"></base-loader>
      </base-button>
      <!-- 登录按钮 End -->
    </form>

    <!-- 其他选项 Start -->
    <div class="sign-up-help">
      <base-link class="to-login" to="/login">立即登录</base-link>
      <base-link class="to-forget" to="/forget">忘记密码</base-link>
    </div>
    <!-- 其他选项 End -->
  </div>
</template>

<script>
import {
  BaseLogo,
  BaseInput,
  BaseButton,
  BaseLink,
  BaseLoader,
} from '@/components/base';
import { post_send_email } from '@/services/user';
import md5 from 'md5';

export default {
  components: {
    BaseLogo,
    BaseInput,
    BaseButton,
    BaseLink,
    BaseLoader,
  },

  data: function () {
    return {
      email: '', // 邮箱
      password: '', // 密码
      emailError: '', // 邮箱错误提示
      passwordError: '', // 密码错误提示
      loader: false, // 控制加载提示显示隐藏
    };
  },

  computed: {
    // @return 遮罩层是否显示
    shade: function () {
      return this.email
        ? Boolean(this.emailError + this.passwordError) || this.loader
        : true;
    },

    // 错误提示动画是否显示
    isAnimation: function () {
      return this.emailError === '账户已经存在' ? true : false;
    },
  },

  methods: {
    // 注册助手
    signUpHandle: function () {
      // 没有遮罩时（允许登录）
      if (!this.shade) {
        this.loader = true; // 打开加载提示
        post_send_email(this.email, md5(this.password)) // 发送登录请求
          .then(() => {
            this.$router.push('/sign-up/loading'); // 跳转到注册等待页面
          })
          .catch((msg) => {
            this.emailError = msg;
          })
          .then(() => {
            // 关闭加载提示
            this.loader = false;
          });
      }
    },
  },

  watch: {
    // 检测邮箱格式
    email: function (value) {
      let emailReg = /^[\w]+@+[a-z0-9]+\.+[a-z]+$/g.test(value);
      this.emailError = emailReg ? '' : '请输入正确的邮箱';
    },

    // 检查密码格式
    password: function (value) {
      let noSpace = /\s/g.test(value);
      let minLength = /^\S{0,5}$/g.test(value);
      let maxLength = /^\S{25,}$/g.test(value);

      this.passwordError = noSpace
        ? '密码不能出现空白字符'
        : minLength
        ? '密码需为 6 位以上的字符'
        : maxLength
        ? '密码不超过 25 个字符'
        : '';
    },
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

.error-enter-active {
  animation: shake-horizontal 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
}

@keyframes shake-horizontal {
  0%,
  100% {
    transform: translateX(0);
  }
  20%,
  60% {
    transform: translateX(-8px);
  }
  40%,
  80% {
    transform: translateX(8px);
  }
  90% {
    transform: translateX(-6px);
  }
}
</style>