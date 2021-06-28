<template>
  <div>个人中心</div>
</template>

<script>
export default {
  beforeRouteEnter: function (to, from, next) {
    to, from;
    alert(`
      该功能正在开发中...
      `);
    alert(`
      您将跳往主页
      `);
    // TODO
    next('/new');
  },
};
</script>

<style>
</style>