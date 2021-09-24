<template>
  <div v-show="dialogShow" class="dialog fit-height fit-width fcenter">
      <div class="page">
          <div v-if="info.title" class="fcenter bdb"><div class="f16 pt10 pb10 black_3">{{info.title}}</div></div>
          <div v-if="info.content" class="page-padding f14">{{info.content}}</div>
          <div v-if='content != undefined'><slot></slot></div>
          <div class="flex flex-between mb10 ml15 mr15">
              <my-button v-show="info.confirmText" primary @click="confirmHandle">{{info.confirmText}}</my-button>
              <my-button v-show="info.cancelText" class="theme_1 ml40" @click="cancelHandle">{{info.cancelText}}</my-button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data: function(){
        return {dialogShow: false}
    },

    props:{
        content:{}
    },

    computed:{
        info: function(){ return this.$store.state.dialogInfo },
    },

    methods:{
        confirmHandle: function(){
            this.info.confirm()
        },
        cancelHandle: function(){
            this.dialogShow = false
            this.info.cancel()
        }
    },
    watch: {
        info: function(info){
           !(this.content == undefined && !this.info.content) && (this.dialogShow = true)
        },
    }
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
</style>
