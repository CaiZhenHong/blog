 <!--
 * @desc: 个人信息
 * @author czh996.top
 * @Date: 2021-03-13
 -->

<template>
  <div v-if="name">
    <div class="profile">
      <!-- 头像 START -->
      <img :src="photo" alt="photo" title="photo" class="photo" />
      <!-- 头像 END -->

      <!-- 昵称 START -->
      <div class="name">{{ name }}</div>
      <!-- 昵称 END -->

      <!-- 外链 Start -->
      <div class="link-list" v-if="links !== 0">
        <div
          class="link-item"
          v-for="({ icon, name, color }, key) in links"
          :key="key"
        >
          <div
            class="link-icon iconfont"
            v-html="icon"
            :style="{ color: color }"
          ></div>
          <div class="link-name">{{ name }}</div>
        </div>
      </div>
      <!-- 外链 End -->

      <div>
        <base-button class="msg-btn" v-if="!login">关注我</base-button>
        <base-button class="msg-btn" v-else>编辑资料</base-button>
      </div>

      <hr v-if="info" class="line" />

      <!-- 个人信息 Start -->
      <div class="info-list" v-for="(value, key) of info" :key="key">
        <div class="info-item">
          <span :class="['info-content', key]">{{ value }}</span>
        </div>
      </div>
      <!-- 个人信息 End -->
    </div>
  </div>
</template>

<script>
import { BaseButton } from '@/components/base';
import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers('user');

export default {
  components: { BaseButton },

  computed: {
    ...mapState(['links', 'info', 'name', 'photo', 'login']),
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.profile {
  @include _box($bdc);
  @include _flex(vrc);
  background: #fff;
  padding-bottom: 60px;
  letter-spacing: 0.5px;
}
.msg-btn {
  width: 250px;
  height: 35px;
}

.photo {
  width: 160px;
  height: 160px;
  margin: 40px 0;
  border: 1px solid $bdc;
  border-radius: 50%;
}
.name {
  margin-bottom: 30px;
  font-size: 18px;
}

.line {
  @include line;
  margin: 40px 0 15px 0;
}

.link-list {
  width: 100%;
  margin-bottom: 40px;
  @include _flex();
  justify-content: space-around;
  .link-item {
    text-align: center;
    color: #464646;

    @include _hover($themec);
    .link-icon {
      font-size: 24px;
    }
    .link-name {
      margin-top: 5px;
      font-size: 12px;
    }
  }
}

.info-list {
  width: 80%;
  .info-item {
    margin-top: 10px;
    .info-icon {
      font-size: 16px;
      font-weight: 900;
    }
    .info-content {
      margin-left: 8px;
      font-size: 13px;
      color: rgb(65, 65, 65);
    }
  }
}
</style>