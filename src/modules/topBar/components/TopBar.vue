 <!--
 * @desc: 顶部导航栏
 * @author czh996.top
 * @Date: 2021年4月3日
 -->
<template>
  <div class="top-bar">
    <div class="left">
      <!-- 标志 Start -->
      <logo></logo>
      <!-- 标志 End -->

      <!-- 文章类别 Start -->
      <div class="category">
        <category-items
          v-for="(category, key) in categoryList"
          :key="key"
          :items="category.items"
        >
          {{ category.name }}
        </category-items>
      </div>
      <!-- 文章类别 End -->
    </div>

    <div class="right">
      <!-- 搜索框 Start -->
      <el-input
        class="top-bar-input"
        size="250,35"
        v-model="searchContent"
        placeholder="搜索"
      >
        <template #pre>&#xe609;</template>
      </el-input>
      <!-- 搜索框 End -->

      <!-- 登录按钮 -->
      <el-button class="login-btn" to="/login" type="grey">登录</el-button>
      <!-- 注册按钮 -->
      <el-button class="register-login" to="/register" type="theme">
        注册
      </el-button>
    </div>
  </div>
</template>

<script>
import Logo from '@components/Logo/Logo';
import CategoryItems from './CategoryItems';
import { ElInput, ElButton } from '@components/element';
import { getColumn } from '@/services/column';

export default {
  components: {
    Logo,
    CategoryItems,
    ElInput,
    ElButton,
  },

  data() {
    return {
      searchContent: '', // 搜索框输入的内容
      categoryList: [], // 文章类别
    };
  },

  created() {
    // 获取文章列表
    getColumn().then((data) => {
      this.categoryList = data;
    });
  },
};
</script>

<style scoped lang='scss'>
@import '@theme';
@import '@app';

.top-bar {
  height: 60px;
  background: $topBarG;
  .left {
    @include _flex();
    float: left;
    height: 100%;
  }
  .right {
    @include _flex();
    float: right;
    height: 100%;
  }
}
.category {
  margin-left: 100px;
}
.top-bar-input {
  margin-right: 60px;
}
.login-btn {
  margin-right: 10px;
}
</style>