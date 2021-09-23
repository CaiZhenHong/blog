<template>
  <div class="toast">
    <div class="flex flex-center flex-items-start toast-inner" :class="{ hidden:toastHidden }">
        <div class="white_1 bd page-padding flex flex-items-center" :class="[`bg-${type.color}`]">
            <span iconfont class="f22 mr10 mt2" v-html="type.icon"></span>
            {{info.msg}}
        </div>
    </div>
  </div>  

</template>

<script>
export default {
    data:function(){
        return { toastHidden: true }
    },

    computed: {
        info: function(){ return this.$store.state.toastInfo },
        type: function(){ 
            let type = {}
            switch(this.info.type){
                case "error":
                            type = {color: 'red_1', icon: '&#xe658;'} 
                            break
                case "warnning":
                            type = {color: 'yellow_1', icon: '&#xe60f;'} 
                            break
                case "succeed":
                            type = {color: 'green_1', icon: '&#xe66e;'} 
                            break
            }
            return type
         }
    },

    watch: {
        info: function(){
            this.toastHidden = false
            setTimeout(()=>{ this.toastHidden = !this.toastHidden }, 3000)
        }
    }
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
}
.toast-inner{
    transition:  0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.page-padding {
    padding: 6px 42px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    letter-spacing: 1px;
    border-top: none;
}
.hidden {
    transform: translateY(-100%);
}
</style>
