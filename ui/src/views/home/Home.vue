<!--
    @desc 模板 
    @props
    @emit   
    @date
    @author caizhenhong
 -->
<template>
  <div class="home">
    <home-header class="header"></home-header>
    <home-profile class="profile" />

    <main class="main">
      <div class="left">
        <ul class="tab-list" v-show="!/catlog/.test($route.path)">
          <li
            :class="['tab-item', { 'tab-item-active': $route.path === path }]"
            v-for="({ name, path }, index) in tabList"
            :key="index"
          >
            <router-link :to="path">{{ name }}</router-link>
          </li>
        </ul>
        <keep-alive include="HomeCatlog,HomeNew">
          <router-view class="children-view" />
        </keep-alive>
      </div>

      <home-record class="home-record"></home-record>
    </main>

    <footer class="footer" id="HOME_FOOTER">
      ©2020 MYBLOG. All Rights Reserved.
    </footer>
  </div>
</template>

<script>
import HomeHeader from '@/components/Header/Header.vue';
import HomeProfile from './HomeProfile/HomeProfile.vue';
import HomeRecord from './HomeRecord/HomeRecord.vue';

export default {
  components: {
    HomeHeader,
    HomeProfile,
    HomeRecord,
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
    };
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
    width: 100%;
    height: 55px;
  }
  .profile {
    max-width: 1000px;
    height: 400px;
    margin: 20px auto 0 auto;
    @media screen and (max-width: 710px) {
      height: 280px;
      margin: 0;
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

    .home-record {
      position: sticky !important;
      top: 20px;
      margin-left: 40px;
      width: 250px;
      height: 740px;
      border-radius: 8px;
      border: 1px solid $border-color;
      box-shadow: 0 0 5px 0 $border-color;
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
</style>