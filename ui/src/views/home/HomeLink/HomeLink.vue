 <!--
 * @description 模板
 * @Date 日期
 -->
<template>
  <div class="home-link">
    <ul class="link my-link">
      <li class="icon__github my-link-item"></li>
      <li class="icon__zhihu my-link-item"></li>
      <li class="icon__qq my-link-item"></li>
      <li class="icon__weibo my-link-item"></li>
      <li class="icon__facebook my-link-item"></li>
      <li class="icon__xiaohongshu my-link-item"></li>
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
  height: 15%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  .my-link-item {
    box-sizing: border-box;
    margin: 0 10px;
    border: 1px solid $border-color;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border-radius: 2px;
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