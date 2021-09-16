<template>
  <div button class="flex flex-items-center flex-center theme f14 button" :class="propStyle"><slot></slot></div>
</template>

<script>
export default {
  props: ['primary', 'large'],

  computed:{
    propStyle:function(){
      return [{primary:this.primary != undefined}, {large:this.large != undefined}]
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  box-sizing: border-box; 
  padding: 6px 10px;
  border-radius: 2px;
  border: 1px solid #0089ff;
}
.primary {
  color: #fff;
  background: #0089ff;
}
.large {
  padding: 7px 20px;
}
</style>