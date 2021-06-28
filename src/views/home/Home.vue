 <!--
 * @desc: 主页
 * @author czh996.top
 * @Date: 2021年4月6日
 -->
<template>
  <div>
    <div class="top-bar-warp">
      <top-bar class="top-bar"></top-bar>
    </div>

    <div class="home">
      <div class="left">
        <home-profile></home-profile>
      </div>
      <div class="middle">
        <home-articles></home-articles>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import HomeProfile from './profile/HomeProfile';
import HomeArticles from './articles/Articles';

import TopBar from '@/components/content/topBar/TopBar';
import { createNamespacedHelpers } from 'vuex';
import { ACTIONS_GET_USER_INFO, UPDATE_USER_INFO } from '@/store/type';
const { mapActions, mapMutations, mapState } = createNamespacedHelpers('user');

export default {
  components: {
    HomeProfile,
    HomeArticles,
    TopBar,
  },

  computed: { ...mapState(['token']) },

  methods: {
    ...mapActions([ACTIONS_GET_USER_INFO]),

    ...mapMutations([UPDATE_USER_INFO]),

    getUserInfo: function () {
      let email = this.$route.params.email;

      if (!email) {
        email = window.localStorage.getItem('emailNum');
      }
      if (!this.token && !email) {
        email = '1229542068@qq.com';
      }

      this[UPDATE_USER_INFO]({ email });

      if (!this.$store.state.user.name) {
        this[ACTIONS_GET_USER_INFO](email);
      }
    },
  },

  created: function () {
    this.getUserInfo();
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';
.top-bar-warp {
  border-bottom: 1px solid $bdc;
  background: $topBarG;
  .top-bar {
    max-width: 1400px;
    margin: 0 auto;
  }
}
.home {
  display: flex;
  max-width: 1400px;
  margin: 10px auto;
}
.left {
  width: 325px;
}

.right {
  width: 200px;
}

.middle {
  flex: 1;
  padding: 0 10px;
}
</style>