 <!--
 * @desc: 个人信息
 * @author czh996.top
 * @Date: 2021-03-13
 -->

<template>
  <div>
    <div class="profile">
      <!-- 头像 START -->
      <img :src="photo" alt="photo" title="photo" class="photo" />
      <!-- 头像 END -->

      <!-- 昵称 START -->
      <div class="name">{{ name }}</div>
      <!-- 昵称 END -->

      <div class="bio" v-if="bio">{{ bio }}</div>

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
        <base-button class="msg-btn" v-if="editProfile" to="/setting/basic">
          编辑资料
        </base-button>
        <base-button class="msg-btn" v-else>关注我</base-button>
      </div>

      <hr v-if="occupation || city || edc" class="line" />

      <!-- 个人信息 Start -->
      <div class="info-list" v-for="(value, key) of info" :key="key">
        <div class="info-item iconfont" v-if="value">
          <div class="info-icon" :class="key | iconFilter">
            <span class="info-text">{{ value }}</span>
          </div>
        </div>
      </div>
      <!-- 个人信息 End -->
    </div>
  </div>
</template>

<script>
import filter from '@/mixins/filter';
import { BaseButton } from '@/components/base';
import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers('user');

export default {
  components: { BaseButton },

  mixins: [filter],

  computed: {
    ...mapState([
      'links',
      'bio',
      'occupation',
      'city',
      'edc',
      'name',
      'photo',
      'token',
    ]),

    info: function () {
      return {
        occupation: this.occupation,
        city: this.city,
        edc: this.edc,
      };
    },

    editProfile: function () {
      return this.$store.state.user.token
        ? this.$route.params.email
          ? false
          : true
        : false;
    },
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
  text-align: center;
  line-height: 35px;
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

.bio {
  font-size: 12px;
  color: #808080;
  margin-bottom: 40px;
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
      font-size: 18px;
    }
    .info-text {
      font-size: 14px;
      margin-left: 10px;
    }
  }
}
</style>