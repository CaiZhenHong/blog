<template>
  <div class="load">
    <slot name="prefix"></slot>
    <div class="load-icon">&#xe6cd;</div>
    <slot v-if="nontext == undefined"> <span class="icon-text">Loading . . .</span></slot>
  </div>
</template>

<script>
export default {
  props:['nontext']
};
</script>

<style lang="scss" scoped>
.load {
  width: 100%;
  text-align: center;
}

.load-icon {
  display: inline-block;
  font-family: 'iconfont';
  font-size: inherit;
  animation: icon-rotate 1.4s cubic-bezier(0.25, 0, 0.84, 1) infinite;
}

.icon-text {
  display: inline-block;
  font-size: 13px;
  margin-left: 8px;
}

@keyframes icon-rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
