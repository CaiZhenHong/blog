 <!--
 * @desc: 个人信息
 * @author czh996.top
 * @Date: 2021-03-13
 -->
<template>
  <div v-if="user">
    <div class="profile">
      <!-- 头像 START -->
      <img :src="user.photo" alt="" class="photo" />
      <!-- 头像 END -->

      <!-- 昵称 START -->
      <div class="name">{{ user.name }}</div>
      <!-- 昵称 END -->

      <!-- 文章、留言数量链接 START -->
      <div class="info">
        <el-link to="/article" class="item">
          <div>0</div>
          <div class="content">文章</div>
        </el-link>

        <el-link to="/comment" class="item">
          <div>0</div>
          <div class="content">留言</div>
        </el-link>
      </div>
      <!-- 文章、留言数量链接 END  -->

      <hr class="line" />

      <!-- 联系方式及其他官网链接 START -->
      <div class="links">
        <profile-link v-for="(link, key) in user.links" :item="link" :key="key">
        </profile-link>
      </div>
      <!-- 联系方式及其他官网链接 END -->
    </div>
  </div>
</template>

<script>
import ProfileLink from './ProfileLink';
import { ElLink } from '@/components/element';
import { mapState } from 'vuex';
export default {
  name: '',

  components: {
    ProfileLink,
    ElLink,
  },

  computed: {
    ...mapState(['user']),
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
}

.photo {
  width: 160px;
  margin: 40px 0;
  border: 1px solid $bdc;
  border-radius: 50%;
}
.name {
  margin-bottom: 40px;
  font-size: 18px;
}

.line {
  @include line;
  margin: 40px 0 15px 0;
}

.info {
  display: flex;
  justify-content: space-between;
  width: 180px;
  text-align: center;

  .item {
    font-size: 18px;
    color: #777575;
    @include _hover(#000);
    cursor: pointer;
  }
  .content {
    margin-top: 7px;
    font-size: 16px;
  }
}

.links {
  width: 100%;
  margin-bottom: 30px;
  @include _flex(rvc);
}
</style>