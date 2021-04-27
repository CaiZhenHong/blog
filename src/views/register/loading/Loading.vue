 <!--
 * @desc: 注册中间跳转页
 * @author czh996.top
 * @Date: 2021年4月7日
 -->
<template>
  <div class="loading">
    <top-bar class="top-bar"> </top-bar>

    <div class="logo">
      <span class="left">My</span>
      <span class="right">BLOG</span>
    </div>

    <div class="vision">
      <div class="text">一起成长，一起分享</div>
      <div class="cursor"></div>
    </div>

    <div class="msg">认证链接已发送至您的邮箱，请注意查收</div>
    <base-loader class="loader">等待您的认证</base-loader>
  </div>
</template>

<script>
import TopBar from '@/components/topBar/TopBar';
import { BaseLoader } from '@/components/base';

export default {
  components: { TopBar, BaseLoader },

  name: '',
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';
.loading {
  height: 100%;
  text-align: center;
  background: $themec;
  .top-bar {
    padding: 0 100px;
    border-bottom: 1px solid #a0a0a0;
  }
  .logo {
    font-size: 140px;
    margin-top: 140px;
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