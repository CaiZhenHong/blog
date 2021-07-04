 <!--
 * @description 模板
 * @Date 日期
 -->
<template>
  <div>
    <header class="page-header">
      <router-link :to="backPath">
        <div class="back-btn">返回</div></router-link
      >
    </header>

    <h2 class="header">{{ this.$route.query.title }}</h2>
    <home-catlog-tree :dataList="dataList" />
  </div>
</template>

<script>
import { getArticleCatlog } from '@/api/article';
import HomeCatlogTree from './HomeCatlogTree.vue';

export default {
  components: {
    HomeCatlogTree,
  },
  data() {
    return {
      dataList: [],
      backPath: '',
    };
  },

  created() {
    getArticleCatlog().then(({ data }) => {
      this.dataList = data;
    });
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.backPath = from.path;
    });
  },
};
</script>

<style lang="scss" scoped>
@import '@theme';
.page-header {
  font-size: 14px;

  border-bottom: 1px solid $border-color;
  padding-left: 20px;
  height: 40px;
  line-height: 40px;

  .back-btn {
    display: inline-block;
    &:hover {
      color: $theme-color;
    }
    &::before {
      font-family: iconfont;
      content: '\e606';
      padding-right: 5px;
      font-size: 10px;
    }
  }
}

.header {
  text-align: center;
  font-size: 24px;
  line-height: 36px;
  margin-top: 48px;
  @media screen and (max-width: 700px) {
    font-size: 18px;
    margin-top: 24px;
    line-height: 24px;
  }
}
</style>