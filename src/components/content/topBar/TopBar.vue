 <!--
 * @desc: 顶部导航栏
 * @author czh996.top
 * @Date: 2021年4月3日
 -->
<template>
  <div class="top-bar iconfont">
    <div class="left">
      <!-- 标志 Start -->
      <base-logo>
        <template #left>{{ topLogo.left }}</template>
        <template #right>{{ topLogo.right }}</template>
      </base-logo>
      <!-- 标志 End -->

      <!-- 搜索框 Start -->
      <base-input
        class="left__input"
        size="250,35"
        v-model="searchContent"
        placeholder="搜索"
      >
        <template #pre>&#xe609;</template>
      </base-input>
      <!-- 搜索框 End -->
    </div>

    <div class="right">
      <!-- 登录按钮 -->
      <base-button
        v-if="!token"
        class="right__login-button"
        to="/login"
        type="grey"
        >登录</base-button
      >
      <!-- 注册按钮 -->
      <base-button
        v-if="!token"
        class="right__sign-up-button"
        to="/sign-up"
        type="theme"
      >
        注册
      </base-button>
      <base-button v-if="token" class="right__write" to="/editor">
        写文章
      </base-button>

      <div class="iconfont right__inform" v-if="token">&#xe603;</div>

      <base-popover>
        <template #head>
          <img class="right__profile" v-if="token" :src="topPhoto" alt="" />
        </template>
        <template #body>
          <base-link to="/profile">
            <div class="right__profile-item icon__profile">个人主页</div>
          </base-link>

          <base-link to="/setting/basic">
            <div class="right__profile-item icon__setting">账户设置</div>
          </base-link>
          <div class="right__profile-item icon__exit" @click="logOut">
            退出登录
          </div>
        </template>
      </base-popover>
    </div>
  </div>
</template>

<script>
import { delete_user_logout } from '@/services/user';
import { SHOW_MSG } from '@/store/type';
import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers('user');

export default {
  components: {},

  data() {
    return {
      searchContent: '', // 搜索框输入的内容
    };
  },

  computed: {
    ...mapState(['logo', 'token', 'photo']),

    topLogo: function () {
      return this.token
        ? JSON.parse(window.localStorage.getItem('logo'))
        : this.logo;
    },

    topPhoto: function () {
      return this.token ? window.localStorage.getItem('photo') : this.photo;
    },
  },

  methods: {
    logOut: function () {
      delete_user_logout().then(() => {
        this.$store.commit(SHOW_MSG, { text: '退出登录成功', type: 'succeed' });
        window.localStorage.clear();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
    },
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

.left__input {
  width: 300px;
  height: 35px;
  margin-left: 60px;
}
.right__inform {
  font-size: 20px;
  cursor: pointer;
  color: $themec;
  margin: 0 30px;
  &:hover {
    color: #fdac33;
    font-weight: 900;
  }
}
.right__profile {
  vertical-align: middle;
  cursor: pointer;
  width: 35px;
  border: 1px solid $bdc;
  border-radius: 50%;
}
.right__profile-item {
  color: #808080;
  padding: 15px 30px;
  @include _hover($background: #dbdada79, $time: 0s);
}
.icon__profile:before {
  content: '\e663';
  margin-right: 8px;
}
.right__write {
  height: 35px;
  line-height: 35px;
  width: 80px;
  text-align: center;
}
.right__login-button,
.right__sign-up-button {
  text-align: center;
  line-height: 35px;
  width: 80px;
  height: 35px;
  margin-right: 10px;
}
</style>