 <!--
 * @desc: 其他官网链接
 * @author czh996.top
 * @Date: 2021年4月6日
 -->
<template>
  <div class="iconfont">
    <!-- 链接 Start -->
    <a
      class="profile-icon"
      @mouseenter="enterHandle"
      @mouseleave="enterHandle"
      v-html="item.icon"
      :href="item.link"
      target="blank"
      @click="clickHandle"
      :style="{ cursor: iSwechat ? 'default' : 'pointer' }"
    ></a>
    <!-- 链接 End -->

    <!-- 气泡弹窗 Start -->
    <transition name="fade">
      <popover class="profile-popover" v-show="showHandle">
        <div>{{ item.name }}</div>
        <img
          v-if="iSwechat"
          src="@/assets/img/wechat.jpg"
          class="popover-img"
          alt=""
        />
      </popover>
    </transition>
    <!-- 气泡弹窗 End -->
  </div>
</template>

<script>
import Popover from '@/components/popover/Popover.vue';

export default {
  components: { Popover },

  data() {
    return {
      showHandle: false, // 气泡弹窗开关
    };
  },

  props: ['item'],

  methods: {
    // 控制气泡显示/隐藏
    enterHandle(e) {
      this.showHandle = e.type === 'mouseenter' ? true : false;
    },
    // 禁用默认点击事件
    clickHandle(e) {
      if (this.iSwechat) {
        e.preventDefault();
      }
    },
  },

  computed: {
    // 判断是否为微信
    iSwechat() {
      if (this.item.name === '扫一扫添加我微信') {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.profile-icon {
  width: 30px;
  height: 30px;
  border: 1px solid hsla(0, 0%, 0%, 0);
  border-radius: 50%;
  font-size: 27px;
  margin-left: 20px;
  line-height: 30px;
  text-align: center;
  color: #525252;
  @include _hover(#8d8d8d);
}
.profile-popover {
  margin-left: 15px;
}
.popover-img {
  height: 200px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>