<template>
  <input class="input" type="text">
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.input {
  box-sizing: border-box;
  border: none;
  outline: none;
  padding: 4px 11px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  &:hover {
    border-color: #389bff;
    opacity: 0.5;
  }
  &:focus {
    border-color: #389bff;
    opacity: 1;
  }
}
</style>