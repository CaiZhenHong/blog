 <!--
 * @desc: 注册中间跳转页
 * @author czh996.top
 * @Date: 2021年4月7日
 -->
<template>
  <div class="loading">
    <div class="logo">
      <span class="left">My</span>
      <span class="right">BLOG</span>
    </div>

    <div class="vision">
      <div class="text">一起成长，一起分享</div>
      <div class="cursor"></div>
    </div>

    <div class="msg">注册链接已发送至您的邮箱，请注意查收</div>
    <base-loader class="loader">等待您的验证 ...</base-loader>

    <base-toast type="load" v-if="toast">
      <template #icon><base-loader :text="false"></base-loader></template>
      <template #text>注册成功 登录中 ...</template>
    </base-toast>
  </div>
</template>

<script>
import { BaseLoader, BaseToast } from '@/components/base';
import { post_user_login } from '@/services/user';
import WSocket from '@/utils/WSocket';

export default {
  components: { BaseLoader, BaseToast },

  data: function () {
    return {
      toast: false,
    };
  },

  // 从路由中获取值
  props: ['email', 'password'],

  /*   // 组件路由守卫，检查是否来自于注册页面，否则将跳往注册页面
  beforeRouteEnter: function (to, from, next) {
    to;
    from.path === '/sign-up' ? next() : next('/sign-up');
  }, */

  created: function () {
    this.login();
  },

  methods: {
    /**
     * 注册成功自动登录
     */
    login: function () {
      let { email, password, $router, toast } = this;
      let ws = new WSocket(`wss://api.czh996.top/send-email?1229542068@qq.com`);
      toast;

      ws.onmessage((data) => {
        // 打开吐司
        toast = true;
        if (data === 'create user succeed') {
          // 检测到 websocket 发来注册成功信息，发起登录请求
          post_user_login({ email, password })
            .then(() => {
              // 登录成功关闭吐司并跳往个人信息页面
              ws.close();
              toast = false;
              $router.replace('/');
            })
            .catch(() => {
              // 登录失败跳往登录页面手动登录
              ws.close();
              toast = false;
              $router.replace('/login');
            });
        }
      });
    },
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';
.loading {
  height: 100%;
  text-align: center;
  background: $themec;
  .logo {
    font-size: 140px;
    padding-top: 140px;
    letter-spacing: 4px;
    animation: focus-in-contract-bck 2s 1.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    .right {
      margin-left: 10px;
      color: #fff;
    }
  }
  .vision {
    @include _fix();
    margin: 0 auto;
    margin-top: 80px;
    font-size: 30px;
    width: 322px;
    .text {
      overflow: hidden;
      float: left;
      animation: typewriter 3s 4.5s forwards steps(9, end);
      white-space: nowrap;
      overflow: hidden;
      width: 0;
      letter-spacing: 5px;
    }
    .cursor {
      float: left;
      width: 2px;
      height: 32px;
      margin-top: 1px;
      margin-left: 10px;
      background: #333;
      opacity: 0;
      animation: blink 0.9s 3.5s infinite steps(2, end);
    }
  }
  .msg {
    font-size: 18px;
    margin-top: 320px;
  }
  .loader {
    margin-top: 20px;
    font-size: 16px;
  }
}

@keyframes focus-in-contract-bck {
  0% {
    letter-spacing: 1em;
    transform: translateZ(300px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    transform: translateZ(12px);
    filter: blur(0);
    opacity: 1;
    visibility: visible;
  }
}

@keyframes typewriter {
  0% {
    width: 0;
    opacity: 1;
    border-color: #ff9900;
  }
  100% {
    width: 310px;
  }
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
