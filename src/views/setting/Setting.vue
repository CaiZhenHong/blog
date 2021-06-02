 <!--
 * @desc: 用户设置
 * @author czh996.top
 * @Date: 2021年5月10日
 -->
<template>
  <div class="setting">
    <div class="top-bar-warp">
      <top-bar class="top-bar"></top-bar>
    </div>

    <div class="profile-warp">
      <div class="profile">
        <ul class="tab">
          <base-link
            v-for="({ name, to, icon }, key) in tab"
            :key="key"
            :to="to"
          >
            <li
              :class="[
                'tab-item iconfont',
                { 'tab-item_active': $route.path === to },
              ]"
              v-html="`${icon}&emsp;${name}`"
            ></li>
          </base-link>
        </ul>

        <div class="view">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>

        <div class="help">123</div>
      </div>
    </div>
  </div>
</template>

<script>
import { BaseLink } from '@/components/base';
import TopBar from '@/components/content/topBar/TopBar';
import { createNamespacedHelpers } from 'vuex';
const { mapActions, mapState } = createNamespacedHelpers('user');
import { ACTIONS_GET_USER_INFO } from '@/store/type';

export default {
  data: function () {
    return {
      tab: [
        {
          to: '/setting/basic',
          name: '基本信息',
          icon: '&#xe663;',
        },
        {
          to: '/setting/individuation',
          name: '个性化',
          icon: '&#xe605;',
        },
        {
          to: '/setting/account',
          name: '账号与密码',
          icon: '&#xe626;',
        },
      ],
    };
  },

  components: {
    BaseLink,
    TopBar,
  },

  computed: {
    ...mapState(['name']),
  },

  methods: {
    ...mapActions([ACTIONS_GET_USER_INFO]),
  },

  created: function () {
    if (!this.name) {
      this[ACTIONS_GET_USER_INFO](window.localStorage.getItem('emailNum'));
    }
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';
.setting {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.profile {
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 40px;
  height: 750px;
  display: flex;
  .tab {
    width: 300px;
    box-sizing: border-box;
    @include _box();
    border-right: none;
  }
  .tab-item {
    padding: 0 40px;
    height: 50px;
    line-height: 50px;
    font-size: 13px;
    text-align: left;
    color: #8590a6;
    @include _hover($background: #f3f3f379, $time: 0s);
  }
  .tab-item_active {
    background: #f3f3f3;
  }
  .view {
    @include _box();
    width: 750px;
    overflow: auto;
    height: 100%;
    padding: 40px;
  }
}
.top-bar-warp {
  border-bottom: 1px solid $bdc;
  background: $topBarG;
  .top-bar {
    max-width: 1400px;
    margin: 0 auto;
  }
}

.help {
  flex: 1;
  margin-left: 20px;
  @include _box();
}
</style>