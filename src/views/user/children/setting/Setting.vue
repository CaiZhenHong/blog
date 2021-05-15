 <!--
 * @desc: 用户设置
 * @author czh996.top
 * @Date: 2021年5月10日
 -->
<template>
  <div class="setup">
    <div class="profile">
      <ul class="tab">
        <base-link v-for="({ name, to, icon }, key) in tab" :key="key" :to="to">
          <li
            :class="[
              'tab-item iconfont',
              { 'tab-item_active': $route.name === to.name },
            ]"
            v-html="`${icon}&emsp;${name}`"
          ></li>
        </base-link>
      </ul>

      <div class="view">
        <router-view></router-view>
      </div>
    </div>

    <div class="help">123</div>
  </div>
</template>

<script>
import { BaseLink } from '@/components/base';

export default {
  data: function () {
    return {
      tab: [
        {
          to: { name: 'user-setting-basic-info' },
          name: '基本信息',
          icon: '&#xe663;',
        },
        {
          to: { name: 'user-setting-individuation' },
          name: '个性化',
          icon: '&#xe605;',
        },
        {
          to: { name: 'user-setting-account' },
          name: '账号与密码',
          icon: '&#xe626;',
        },
      ],
    };
  },

  components: {
    BaseLink,
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';
.setup {
  width: 100%;
  display: flex;
}

.profile {
  flex: 1;
  height: 100%;
  @include _box();
  display: flex;
  .tab {
    width: 315px;
    box-sizing: border-box;
    border-right: 1px solid $bdc;
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
    width: 100%;
    overflow: auto;
    height: 100%;
    padding: 40px;
  }
}

.help {
  width: 240px;
  margin-left: 80px;
  @include _box();
}
</style>