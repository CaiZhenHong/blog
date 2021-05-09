 <!--
 * @desc: 顶部导航栏
 * @author czh996.top
 * @Date: 2021年4月3日
 -->
<template>
  <div class="top-bar" v-if="logo">
    <div class="left">
      <!-- 标志 Start -->
      <base-logo>
        <template #left>{{ logo.left }}</template>
        <template #right>{{ logo.right }}</template>
      </base-logo>
      <!-- 标志 End -->
      <div class="articles">
        <div
          class="article"
          v-for="({ classI, classII }, key) in articles"
          :key="key"
        >
          <base-popover>
            <div class="classI" slot="head">{{ classI }}</div>
            <div
              class="classII"
              slot="body"
              v-for="(item, key) in classII"
              :key="key"
            >
              {{ item }}
            </div>
          </base-popover>
        </div>
      </div>
    </div>

    <div class="right">
      <!-- 搜索框 Start -->
      <base-input
        class="top-bar-input"
        size="250,35"
        v-model="searchContent"
        placeholder="搜索"
      >
        <template #pre>&#xe609;</template>
      </base-input>
      <!-- 搜索框 End -->

      <!-- 登录按钮 -->
      <base-button class="login-btn" to="/login" type="grey">登录</base-button>
      <!-- 注册按钮 -->
      <base-button class="register-login" to="/sign-up" type="theme">
        注册
      </base-button>
    </div>
  </div>
</template>

<script>
import { BaseInput, BaseButton, BaseLogo, BasePopover } from '@components/base';

import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers('user');

export default {
  components: {
    BaseLogo,
    BaseInput,
    BaseButton,
    BasePopover,
  },

  data() {
    return {
      searchContent: '', // 搜索框输入的内容
    };
  },

  computed: {
    ...mapState(['logo', 'articles']),
  },
};
</script>

<style scoped lang='scss'>
@import '@theme';
@import '@app';

.top-bar {
  height: 67px;
  background: $topBarG;
  .left {
    @include _flex();
    float: left;
    height: 100%;
  }
  .right {
    @include _flex();
    float: right;
    height: 100%;
  }
}

.articles {
  margin-left: 200px;
  letter-spacing: 2px;
  display: flex;
}
.article {
  margin-right: 40px;
}
.classI {
  color: #424242;
  font-size: 16px;
  @include _hover(#000);
}
.classII {
  margin: 15px 15px;
  @include _hover($themec);
}

.top-bar-input {
  width: 240px;
  height: 32px;
  margin-right: 60px;
}
.login-btn,
.register-login {
  text-align: center;
  line-height: 35px;
  width: 80px;
  height: 35px;
  margin-right: 10px;
}
</style>