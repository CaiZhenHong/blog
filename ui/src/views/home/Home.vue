<!--
    @desc 主页
    @routePath '/'
    @author caizhenhong
 -->
<template>
  <div class="home">
    <!-- 顶部栏组件 Start -->
    <home-header class="header" @click="controlSideBar">
      <transition name="fade">
        <side-bar v-if="sideBarShow">
          <home-link class="home-link" :myLinks="myLinks"></home-link>
        </side-bar>
      </transition>
    </home-header>
    <!-- 顶部栏组件 End -->

    <!-- 个人信息组件 -->
    <home-profile class="profile" :profile="profile" />
    <!-- 个人信息组件 -->

    <!-- 以下为主要内容 -->
    <main class="main">
      <div class="left">
        <!-- tab栏 Start  -->
        <ul class="tab-list" v-show="!/catlog/.test($route.path)">
          <li
            :class="['tab-item', { 'tab-item-active': $route.path === path }]"
            v-for="({ name, path }, index) in tabList"
            :key="index"
          >
            <router-link :to="path">{{ name }}</router-link>
          </li>
        </ul>
        <!-- tab 栏 End -->

        <!-- 子路由 start -->
        <keep-alive include="HomeCatlog,HomeNew">
          <router-view class="children-view" />
        </keep-alive>
        <!-- 子路由 End-->
      </div>
      <home-link class="home-link" :myLinks="myLinks"></home-link>
    </main>

    <!-- 底部栏 Start -->
    <footer class="footer" id="HOME_FOOTER">
      ©2020 MYBLOG. All Rights Reserved.
    </footer>
    <!-- 底部栏 End -->
  </div>
</template>

<script>
import HomeHeader from '@/components/Header/Header.vue';
import HomeProfile from './HomeProfile/HomeProfile.vue';
import HomeLink from './HomeLink/HomeLink.vue';
import { getUserInfo } from '@/api/user';

export default {
  components: {
    HomeHeader,
    HomeProfile,
    HomeLink,
    SideBar: () => import('@/components/SideBar/SideBar.vue'),
  },

  data() {
    return {
      tabList: [
        {
          name: '最近发布',
          path: '/new',
        },
        {
          name: '文章分类',
          path: '/categories',
        },
      ],
      sideBarShow: false,
      myLinks: [],
      profile: {},
    };
  },

  methods: {
    controlSideBar(v) {
      this.sideBarShow = v;
    },
  },

  created() {
    getUserInfo().then(({ profile, links }) => {
      this.myLinks = links;
      this.profile = profile;
    });
  },
};
</script>

<style lang="scss" scoped>
@import '@theme';

.home {
  width: 100%;
  height: 100%;
  background: #fff;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 40;
    width: 100%;
    height: 55px;
  }
  .profile {
    max-width: 1000px;
    height: 400px;
    margin: 75px auto 0 auto;
    @media screen and (max-width: 710px) {
      height: 280px;
      margin-top: 55px;
      @media screen and (max-width: 500px) {
        height: 230px;
      }
    }
  }
  .main {
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .left {
      flex: 1;
      border: 1px solid $border-color;
      box-shadow: 0 0 5px 0 $border-color;

      .tab-list {
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid $border-color;
      }
      .tab-item {
        height: 100%;
        margin-left: 20px;
        line-height: 50px;
        font-size: 14px;
        color: #333;
      }
      .tab-item-active {
        color: $theme-color;
      }
    }

    .home-link {
      position: sticky !important;
      top: 20px;
      margin-left: 40px;
      width: 250px;
      height: 740px;

      background: #fff;
      @media screen and (max-width: 700px) {
        display: none;
        position: fixed;
        top: 55px;
        right: 0;
        box-shadow: none;
        border-radius: 0;
      }
    }
  }
  .footer {
    margin-top: 50px;
    height: 40px;
    background: $theme-color;
    color: #ffffff;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    border-top: 1px solid $border-color;
  }
}
.fade-enter-active {
  animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.fade-leave-active {
  animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both reverse;
}

@keyframes slide-right {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>