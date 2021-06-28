 <!--
 * @desc: 文章简述
 * @Date: 2021年6月5日
 -->
<template>
  <div class="outline">
    <div class="name">文章简介：</div>
    <textarea class="outline-editor" v-model.lazy="description"></textarea>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      description: '',
    };
  },

  watch: {
    description: function (value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@app';
@import '@theme';

.outline {
  display: flex;
  margin-top: 30px;
  .outline-editor {
    box-sizing: border-box;
    padding: 12px;
    width: 320px;
    height: 160px;
    margin-left: 20px;
    resize: none;
    outline: none;
    border: 1px solid rgb(202, 200, 200);
    border-radius: 5px;
    &:focus {
      border-color: rgb(160, 160, 160);
    }
  }
  .name {
    font-size: 15px;
  }
}
</style>