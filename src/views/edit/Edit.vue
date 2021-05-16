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
  <div class="edit">
    <div class="top-bar"></div>
    <div
      class="edit-area"
      ref="editArea"
      contenteditable="true"
      @keyup.enter="enter"
    >
      <div>1</div>
    </div>
  </div>
</template>

<script>
//import marked from 'marked';

export default {
  data: function () {
    return {
      content: [],
    };
  },

  methods: {
    enter: function () {
      let el = this.$refs.editArea;

      for (let i = 0; i < 40; i++) {
        console.log(getSelection().focusNode === el[i]);
      }
    },

    test: function () {
      console.log(321);
    },
  },

  created: function () {},
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.edit-area {
  width: 960px;
  height: 1188px;
  margin: 0 auto;
  cursor: text;
  @include _box();
  outline: none;
}
</style>