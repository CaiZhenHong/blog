<template>
  <div button class="button white">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.button {
  padding: 6px 15px;
  border-radius: 3px;
  background-color: #389bff;
  color: #faf5f5;
}
</style>