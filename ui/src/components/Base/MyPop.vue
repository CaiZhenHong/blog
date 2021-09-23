<template>

  <div class="my-pop" @mouseenter="mouseHandle(true)" @mouseleave="mouseHandle(false)">
      <div class="trigger" :class="{none:!popShow}" @click="clickHandle"><slot name="trigger"></slot></div>
      <transition name = "fade">
        <div class="pop bg-white_1 bd" v-show="popShow"><slot></slot></div>
      </transition>
  </div>
</template>

<script>
export default {
    data: function(){
        return { popShow: false }
    },

    methods: {
        clickHandle: function(){
            console.log('r');
        },
        mouseHandle: function(flag){
            this.popShow = flag
        }
    }
}
</script>

<style lang="scss" scoped>
.my-pop {
    position: relative;
}
.trigger {
    position: relative;
    &::after{
        z-index: 101;
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        margin-top: 6px;
        border:6px solid $white_1;
        box-shadow: -2px -2px 3px 0 $gray_3;
        transform: translateX(-50%) rotate(45deg);
    }
}
.none{
    &::after{
        display: none;
    }
}
.pop{
    white-space:nowrap;
    z-index: 100;
    position: absolute;
    right: 0;
    padding: 6px 0;
    margin-top: 10px;
    box-shadow: 0 0 6px 0 $gray_3;
    border-radius: 4px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
