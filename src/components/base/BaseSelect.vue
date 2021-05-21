 <!--
 * @desc: 气泡弹出框
 * @author czh996.top
 * @Date: 2021年4月2日
 * @slot: head 鼠标划入的监听对象
 * @slot: body 鼠标移出划入的监听对象
 -->
<template>
  <div class="base-select">
    <input
      type="text"
      class="select iconfont"
      :value="value"
      @focus="focusHandle"
      @blur="focusHandle"
      @click="clickHandle"
    />
    <transition name="options">
      <div class="options" v-show="visible">
        <slot>123</slot>
      </div>
    </transition>
  </div>
</template> 

<script>
export default {
  name: 'BaseSelect',

  props: {
    value: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      visible: false,
    };
  },

  methods: {
    focusHandle: function (e) {
      if (e.type === 'focus') {
        e.preventDefault();
      } else {
        this.visible = false;
      }
    },

    clickHandle: function () {
      this.visible = !this.visible;
    },
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.base-select {
  width: 100%;
  height: 100%;
  position: relative;
  text-align: inherit;
  font-size: inherit;
}
.select {
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  text-align: inherit;
  text-indent: inherit;
  font-size: inherit;
  caret-color: #00000000;
  cursor: pointer;
  background-color: inherit;
  background-image: url(/arrow-down.png);
  background-size: 14px;
  background-repeat: no-repeat;
  background-position: center right;
}

.options {
  position: absolute;
  left: 0;
  letter-spacing: 1px;
  z-index: 1000;
  cursor: pointer;
}

.options-enter,
.options-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
.options-enter-to,
.options-leave {
  transform: translateY(0);
  opacity: 1;
}
.options-enter-active,
.options-leave-active {
  transition: all 0.2s;
}
</style>