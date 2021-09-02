<template>
  <div class="load">
    <slot name="prefix"></slot>
    <div class="load-icon">&#xe6cd;</div>
    <slot> <span class="icon-text">加载中...</span></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.load {
  width: 100%;
  text-align: center;
}

.load-icon {
  display: inline-block;
  font-size: 12px;
  font-family: 'iconfont';
  color: #a8a8a8;
  animation: icon-rotate 1.4s cubic-bezier(0.25, 0, 0.84, 1) infinite;
}

.icon-text {
  display: inline-block;
  font-size: 12px;
  color: #a8a8a8;
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