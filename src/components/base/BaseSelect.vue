 <!--
 * @desc: 文章操作及信息
 * @author czh996.top
 * @Date: 2021年4月7日
 * @props: [Obejct] ations - 用于渲染操作列表的数据
 * @props: [Boolean] shareBtnShow - 控制分享按钮隐藏显示
 * @example
 *  <article-item-comment-button :actions="actions" :shareBtnShow="shareBtnShow"></article-item-comment-button>
 -->
<template>
  <div class="base-select">
    <div class="select" @click="selectHandle">
      <div class="content" :style="{ color: color }">&#xe600; github</div>
      <div class="arrow iconfont">&#xe627;</div>
    </div>
    <div class="option">123</div>
  </div>
</template>

<script>
export default {
  components: {},
  data: function () {
    return {
      value: '123',
    };
  },

  props: {
    color: {
      type: String,
    },
  },

  methods: {
    selectHandle: function () {},
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.select {
  display: flex;
}
.content {
  width: 100%;
  height: 100%;
}
.arrow {
  margin-left: 10px;

  @include _hover($themec, $time: 0s);
}
.option {
}
</style>