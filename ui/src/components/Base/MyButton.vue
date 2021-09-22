<template>
  <div button @click="clickEmit" class="flex flex-items-center flex-center theme f14 button" :class="propStyle"><slot></slot></div>
</template>

<script>
export default {
  props: ['primary', 'large', 'big'],

  computed:{
    propStyle:function(){
      return [{primary:this.primary != undefined}, {large:this.large != undefined}, {big:this.big != undefined}]
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
</style>
