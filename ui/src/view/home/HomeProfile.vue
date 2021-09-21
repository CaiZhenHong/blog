<template>
  <div class="page h400">
    <div class="h160 fit-width bg-white_1 profile">
      <div class="ml20 mr20 flex flex-between flex-items-end">
        <div class="flex">
          <div class="w160 h160 photo mr20"><img class="fit-width fit-height bd" src="@/assets/image/test.png" alt=""></div>
          <div class="mt20">
            <div class="f26 blod black_3">{{user.name}}</div>
            <div class="mt16 f14 black_2">职业：{{user.job}}</div>
            <div class="mt16 f14 black_2">城市：{{user.address}}</div>
          </div>
        </div>
          <my-button primary class="h35 w160 mb20">{{buttonName}}</my-button>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    user: function(){ return this.$store.state.user.info },
    login: function(){ return this.$store.state.user.login },
    buttonName: function(){ return this.login ? '编辑资料' : '订阅' }
  }
};
</script>

<style lang="scss" scoped>
.page{
  position: relative;
  background: url('@/assets/image/cover.jpg') no-repeat center;
  background-size: 100%;
}
.profile {
  position: absolute;
  bottom: 0;
}
.photo{
  box-sizing: content-box;
  border: 10px solid $white_1;
  margin-top: -40px;
  border-radius: 5px;
}
</style>
