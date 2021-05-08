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
      <div class="link-list" v-if="links.length !== 0">
        <div
          class="link-item"
          v-for="({ icon, name }, key) in links"
          :key="key"
        >
          <div class="link-icon iconfont" v-html="icon"></div>
          <div class="link-name">{{ name }}</div>
        </div>
      </div>
      <!-- 外链 End -->

      <div><slot></slot></div>

      <hr v-if="info" class="line" />

      <!-- 个人信息 Start -->
      <div
        class="info-list"
        v-for="({ icon, content }, key) in info"
        :key="key"
      >
        <div class="info-item">
          <span class="info-icon iconfont" v-html="icon"></span>
          <span class="info-content">{{ content }}</span>
        </div>
      </div>
      <!-- 个人信息 End -->
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('user');

export default {
  computed: {
    ...mapState(['links', 'info', 'name', 'photo']),
  },

  methods: {
    ...mapActions(['getUser']),

    clickHandle: function () {
      this.$emit('click');
    },
  },

  mounted: function () {
    if (!this.name) {
      this.getUser();
    }
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
  width: 80%;
  margin-bottom: 40px;
  @include _flex();
  justify-content: space-around;
  .link-item {
    text-align: center;
    margin-right: 20px;
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