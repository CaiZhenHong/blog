 <!--
 * @desc: 评论输入框
 * @author czh996.top
 * @Date: 2021年4月2日
 -->
<template>
  <div class="comment-input">
    <div class="input" contenteditable="true" @input="inputHandle"></div>
    <div
      :class="['emit-btn-disable', { 'emit-btn': commentContent }]"
      @click="emitComment"
      v-show="true"
    >
      发布
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      commentContent: '',
      show: false,
    };
  },

  methods: {
    emitComment() {},

    inputHandle(e) {
      this.commentContent = e.target.innerHTML;
      let inputContent = this.commentContent.replace(/\s/g, '');
      if (inputContent.replace(/<div><br><\/div>|<br>|&nbsp;/g, '') === '') {
        this.commentContent = '';
      }
    },
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.comment-input {
  display: flex;
  .input {
    flex: 1;
    line-height: 18px;
    padding: 10px;
    border: 1px solid #d6d6d6;
    outline: none;
    letter-spacing: 1px;
    font-size: 14px;
    word-break: break-all;
    border-radius: 3px;
    transition: all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover {
      border-color: #cacaca;
    }
    &:focus {
      border-color: #ffc773;
    }
  }
  .emit-btn-disable {
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    box-sizing: border-box;
    width: 55px;
    text-align: center;
    font-size: 14px;
    height: 38px;
    align-self: flex-end;
    line-height: 38px;
    background: #fab856;
    color: #fff;
    margin-left: 25px;
    border: 1px solid $bdc;
    border-radius: 3px;
    cursor: default;
  }
  .emit-btn {
    background: #ff8800;
    cursor: pointer;
  }
}
</style>