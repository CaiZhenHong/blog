 <!--
 * @desc: 弹窗
 * @author czh996.top
 * @Date: 2021年5月4日
 * @prop:{String} [type='dialog'] 弹窗类型，默认为对话框 
 * @example
 *    <base-toast>
 *            <template #icon>放置一个icon图标</tempalte>
 *            <template #text>放置文字</tempalte>
 *    </base-toast>
 -->
<template>
  <div class="base-toast">
    <div class="box">
      <div class="content">
        <div class="icon iconfont"><slot name="icon"></slot></div>
        <div class="text"><slot name="text"></slot></div>
      </div>

      <div class="actions" v-if="isDialog">
        <base-button class="cancel" type="grey">取消</base-button>
        <base-button class="ack">确认</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import { BaseButton } from './index';

export default {
  components: { BaseButton },

  props: {
    type: {
      type: String,
      default: 'dialog',
    },
  },

  computed: {
    isDialog: function () {
      return this.type === 'dialog' ? true : false;
    },
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.base-toast {
  @include _flex(rvc);
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
}

.box {
  padding: 35px;
  background: #fff;
  box-shadow: 0 0 10px rgba(34, 34, 34, 0.295);

  border-radius: 5px;
}

.content {
  float: left;
  @include _flex();
  .icon {
    font-size: 20px;
    margin-right: 15px;
    color: #fbc24f;
  }
  .text {
    font-size: 16px;
  }
}

.actions {
  float: right;
  margin-left: 40px;
  margin-top: 50px;
  @include _flex();
  font-size: 14px;
  .cancel {
    width: 70px;
    height: 35px;
  }
  .ack {
    margin-left: 10px;
    width: 70px;
    height: 35px;
  }
}
</style>