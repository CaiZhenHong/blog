<template>
  <div :button='propStyle[3].disabled?null:true' @click="clickEmit" class="unselected flex flex-items-center flex-center theme f14 button" :class="propStyle"><slot></slot></div>
</template>

<script>
export default {
  props: ['primary', 'large', 'big', 'disabled'],

  computed:{
    propStyle:function(){
      return [{primary:this.primary != undefined}, {large:this.large != undefined}, {big:this.big != undefined},{disabled:this.disabled === true}]
    }
  },

  methods: {
    clickEmit: function () { this.$emit('click') }
  }
}
</script>

<style lang="scss" scoped>
.button {
  box-sizing: border-box; 
  padding: 6px 20px;
  border-radius: 2px;
  border: 1px solid $theme_1;
}
.primary {
  color: #fff;
  background: $theme_1;
}
.large {
  padding: 7px 20px;
}
.big {
  padding: 12px 20px;
  border-radius: 6px;
}
.disabled {
  position: relative;
  border-color: #ffffffff;
  pointer-events: none;
  &::after{
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: rgba(223, 223, 223, 0.404);
  }

}
</style>
