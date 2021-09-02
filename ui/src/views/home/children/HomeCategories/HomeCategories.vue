 <!--
 * @description 模板
 * @Date 日期
 -->
<template>
  <ul class="list">
    <li
      class="item"
      v-for="({ title, summary, tag }, index) in dataList"
      :key="index"
    >
      <div class="item-inner">
        <div class="name">
          <router-link :to="{ path: '/catlog', query: { title } }">{{
            title
          }}</router-link>
        </div>
        <div class="summary">
          {{ summary }}
        </div>
        <div class="tag">{{ tag }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
import { getKblist } from '@/api/article';
export default {
  name: 'HomeCatlog',
  data() {
    return {
      dataList: [],
    };
  },
  created() {
    getKblist().then((data) => {
      this.dataList = data;
    });
  },
};
</script>

<style lang="scss" scoped>
@import '@theme';
.page-header {
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  border-bottom: 1px solid $border-color;
  font-size: 14px;
}
.list {
  display: flex;
  flex-wrap: wrap;
  .item {
    box-sizing: border-box;
    height: 150px;
    width: 50%;
    padding: 15px;
    @media screen and (max-width: 900px) {
      width: 100%;
    }
  }
  .item-inner {
    width: 100%;
    height: 100%;
    border: 1px solid $border-color;
    border-radius: 10px;
    box-shadow: 0 0 5px $border-color;
    padding: 15px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .name {
    font-size: 14px;
    color: $theme-color;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
      sans-serif, Apple Color Emoji, Segoe UI Emoji;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  .summary {
    line-height: 1.5;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
}
</style>