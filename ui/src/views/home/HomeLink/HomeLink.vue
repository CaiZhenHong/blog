 <!--
 * @description 模板
 * @Date 日期
 -->
<template>
  <div class="home-link">
    <ul class="link my-link" v-if="myLinks.length">
      <a v-for="({ icon, url }, index) in myLinks" :key="index" :href="url">
        <li :class="[icon, 'my-link-item']"></li>
      </a>
    </ul>

    <div class="link recommend-link">
      <div class="title">留言</div>
      <div class="content"></div>
    </div>

    <div class="link f-link">
      <div class="title">友情链接</div>
      <div class="title"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    myLinks: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
@import '@theme';

.link {
  padding: 12px;
  border-radius: 3px;
  border: 1px solid $border-color;
  box-shadow: 0 0 3px 0 $border-color;
  .title {
    font-size: 14px;
    color: #333;
  }
}

.my-link {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  .my-link-item {
    width: 35px;
    height: 35px;
    margin: 10px 9px;
    border: 1px solid $border-color;
    line-height: 35px;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;

    &:hover {
      &::before {
        transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        color: $theme-color;
        background: #fff;
      }
      transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      border-color: $theme-color;
    }
  }
}

.recommend-link {
  height: 35%;
  margin-top: 12px;
}

.f-link {
  height: 60%;
  margin-top: 12px;
}
</style>