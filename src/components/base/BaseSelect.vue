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
      <div class="content" :style="{ color: color }"><slot></slot></div>
      <div class="arrow iconfont icon__down"></div>
    </div>
    <div class="option" v-show="optionShow">
      <slot name="option"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      optionShow: false,
    };
  },

  props: {
    color: {
      type: String,
    },
  },

  methods: {
    selectHandle: function () {
      this.optionShow = !this.optionShow;
    },
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.select {
  display: flex;
}
.base-select {
  position: relative;
}
.content {
  width: 100%;
  height: 100%;
}
.arrow {
  margin-left: 10px;
  font-size: 16px;

  @include _hover($themec, $time: 0s);
}
.option {
  width: 100%;
  position: absolute;
}
</style>