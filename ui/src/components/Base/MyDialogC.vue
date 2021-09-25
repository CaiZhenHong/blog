<template>
  <div v-show="dialogShow" class="dialog fit-height fit-width fcenter">
    <transition name="fade">
      <div class="page" v-show="dialogShow">
          <div v-show="title" class="fcenter bdb"><div class="f16 pt10 pb10 black_3">{{title}}</div></div>
          <div><slot></slot></div>
          <div class="flex flex-around mb10 pt30  page-padding bdt">
              <my-button large v-show="cancelText" class="theme_1 mr40" @click="cancelHandle">{{cancelText}}</my-button>
              <my-button large v-show="confirmText" primary @click="confirmHandle">{{confirmText}}</my-button>
          </div>
      </div>
  </transition>
  </div>
</template>

<script>
export default {
    props:{
        title:{type:String,default:'标题'},
        confirmText:{type:String,default:'确认'},
        cancelText:{type:String,default:'取消'},
        confirm:{},
        cancel:{Function},
        show:{}
    },

    data:function(){
        return { dialogShow: true }
    },
    
    methods:{
        closeDialog: function(){
            this.dialogShow = false
        },

        confirmHandle: function(){
            this.confirm && this.confirm(this.closeDialog)
        },
        cancelHandle: function(){
            this.cancel && this.cancel()
            this.closeDialog()
        },
    },

    watch:{
        show: function(){
            this.dialogShow = true
        }
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
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: scale(0);
}
</style>
