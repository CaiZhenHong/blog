<template>
  <div v-show="dialogShow" class="dialog fit-height fit-width fcenter">
      <transition name="fade">
      <div class="page" v-show="dialogShow">
          <div v-if="info.title" class="fcenter bdb"><div class="f16 pt10 pb10 black_3">{{info.title}}</div></div>
          <div v-if="info.content" class="page-padding f14">{{info.content}}</div>
          <div class="flex flex-between mb10 ml15 mr15">
              <my-button v-show="info.cancelText" class="theme_1 mr40" @click="cancelHandle">{{info.cancelText}}</my-button>
              <my-button v-show="info.confirmText" primary @click="confirmHandle">{{info.confirmText}}</my-button>
          </div>
      </div>
      </transition>
  </div>
</template>

<script>
export default {
    data: function(){
        return {dialogShow: false}
    },

    computed:{
        info: function(){ return this.$store.state.dialogInfo },
    },

    methods:{
        close: function() {
            this.dialogShow = false
        },

        confirmHandle: function(){
            this.info.confirm(this.close)
            console.log(this.info.confirm(this.close));
        },
        cancelHandle: function(){
            this.close()
            this.info.cancel()
        }
    },
    watch: {
        info: function(){
           this.info.content&& (this.dialogShow = true)
        },
    },
    
}
</script>

<style lang="scss" scoped>
.dialog{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(228, 228, 228, 0.39);
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: scale(0);
}
</style>
