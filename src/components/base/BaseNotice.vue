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
  <div class="base-notice iconfont">
    <transition name="notice">
      <div class="base-notice__content" v-if="show"><slot></slot></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: '',

  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },

  watch: {
    show: function (value) {
      if (value) {
        setTimeout(() => {
          this.$emit('hidden', false);
        }, 4000);
      }
    },
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.base-notice {
  letter-spacing: 1px;
  position: fixed;
  top: 0;
  left: 50%;
  font-size: 16px;
  transform: translate(-50%, 80px);
}
.base-notice__content {
  padding: 15px 30px;
  box-shadow: 1px 1px 10px 0 #c9c9c9;
  @include _box();
}

.notice-enter-active {
  animation: slide-in-blurred-top 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}
.notice-leave-active {
  animation: slide-in-blurred-top 1s cubic-bezier(0.23, 1, 0.32, 1) reverse;
}

@keyframes slide-in-blurred-top {
  0% {
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>