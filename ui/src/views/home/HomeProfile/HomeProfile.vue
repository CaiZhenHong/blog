<!--
    @desc 模板 
    @props
    @emit   
    @date
    @author caizhenhong
 -->
<template>
  <div class="c_main-profile">
    <div
      class="cover"
      :style="{
        backgroundImage: 'url(' + cover + ')',
      }"
    ></div>

    <div class="profile">
      <div class="photo-warp">
        <img :src="profile.photo" alt="" class="photo" />
      </div>
      <div class="info">
        <div class="basic-info">
          <div class="info-name">{{ profile.name }}</div>
          <div class="info-job">{{ profile.job }}</div>
        </div>
        <div class="other-info">
          <div class="iconfont info-gender">&#xe658;</div>
          <div class="iconfont more-button">查看更多资料</div>
        </div>
      </div>
      <div class="focus-me">订阅</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      default() {
        return null;
      },
    },
  },

  data() {
    return {
      cover: this.profile.cover,
    };
  },

  computed: {},
};
</script>

<style lang="scss" scoped>
@import './HomeProfile.scss';
</style>