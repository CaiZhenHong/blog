 <!--
 * @description 模板
 * @Date 日期
 -->
<template>
  <div class="home-link">
    <div class="link my-link" v-if="myLinks.length">
      <div class="title">我的链接</div>
      <my-link-content class="content" :myLinks="myLinks" />
    </div>

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
import MyLinkContent from './MyLinkContent.vue';
export default {
  components: {
    MyLinkContent,
  },

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

.home-link {
  display: flex;
  flex-direction: column;
}

.link {
  border-radius: 3px;
  border: 1px solid $border-color;
  box-shadow: 0 0 3px 0 $border-color;
  .title {
    padding: 10px 14px;
    font-size: 13px;
    color: #333;
    border-bottom: 1px solid $border-color;
  }
  .content {
    padding: 12px;
    padding-top: 0;
  }
}

.my-link {
  .content {
    margin-top: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
}

.recommend-link {
  margin-top: 12px;
}

.f-link {
  margin-top: 12px;
}
</style>