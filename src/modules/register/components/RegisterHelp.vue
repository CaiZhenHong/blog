 <!--
 * @desc: 用户帮助
 * @author czh996.top
 * @Date: 2021年4月7日
 * @props: [String] to - 跳转链接
 * @example
 *  <article-item-comment-button :actions="actions" :shareBtnShow="shareBtnShow"></article-item-comment-button>
 -->
<template>
  <div class="help">
    <router-link class="regist" to="/login" tag="div">快速登录</router-link>
    <div class="forget">忘记密码</div>
  </div>
</template>

<script>
export default {
  name: '',
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.help {
  display: flex;
  justify-content: center;
  .regist {
    color: #0000ff;
    font-size: 13px;
    cursor: pointer;
    &::after {
      content: '|';
      display: inline-block;
      margin: 0 10px;
    }
  }
  .forget {
    font-size: 13px;
    cursor: pointer;
    color: #0000ff;
  }
}
</style>