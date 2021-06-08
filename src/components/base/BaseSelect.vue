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
      readonly
    />
    <transition name="options">
      <div class="options" v-show="visible">
        <div
          class="option"
          @click="selectOption(option)"
          v-for="(option, index) in options"
          :key="index"
        >
          {{ option }}
        </div>
      </div>
    </transition>
  </div>
</template> 

<script>
export default {
  name: 'BaseSelect',

  props: {
    value: {
      type: [String, Number],
      default: '',
    },

    options: {
      type: Array,
    },
  },

  data() {
    return {
      visible: false,
      emitting: false,
    };
  },

  methods: {
    focusHandle: function (e) {
      if (e.type === 'focus') {
        e.preventDefault();
      } else {
        if (!this.emitting) {
          this.visible = false;
        }
      }
    },

    clickHandle: function () {
      this.visible = !this.visible;
    },

    selectOption: function (option) {
      this.emitting = true;
      this.$emit('input', option);
      this.emitting = false;
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

  cursor: pointer;
  background-color: inherit;
  background-image: url(/arrow-down.png);
  background-size: 14px;
  background-repeat: no-repeat;
  background-position: center right;
}

.options {
  position: absolute;
  letter-spacing: 1px;
  z-index: 1000;
  cursor: pointer;

  border: 1px solid #c0c0c0;
  width: 100%;
  background: #fff;
  padding: 0 10px;
  box-sizing: content-box;
  left: -11px;
  border-top-color: #e7e5e5;
  transition: all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    border-color: #9c9c9c;
    border-top-color: #e7e5e5;
  }
}

.option {
  width: 100%;
  margin-left: -10px;
  padding: 0 10px;
  box-sizing: content-box;
  @include _hover($background: $themec, $color: #fff);
  height: 32px;
  line-height: 32px;
  padding-left: 10px;
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