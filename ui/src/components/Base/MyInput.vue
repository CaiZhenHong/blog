<template>
    <div class="bd h35 f14 flex myinput" :class="[ `w${width}`, `h${height}`, {[`w${focusWidth}`]: focus}, {focus} ]">
        <div iconfont class="fcenter icon fw500" v-html="icon"></div>
        <input class="fit-width fit-height black_3" :placeholder="placeholder" type="text" @blur="focusHandle(false)" @focus="focusHandle(true)">
    </div>
</template>

<script>
export default {
    data:function(){
        return { focus: false }
    },

    props:{
        placeholder:{ type: String },
        width: { type: String },
        height: { type: String },
        focusWidth: {type: String},
        icon:{ type: String }
    },

    methods: {
        focusHandle: function(flag){
            this.focus = flag
        }
    }
}
</script>

<style lang="scss" scoped>
.icon{
    width: 35px;
    height: 35px;
}
.myinput {
    border-radius: 5PX;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover{
        border-color: $theme_1;
        opacity: 0.8;
    }
}
.focus{
    border-color: $theme_1;
    .icon{font-weight: 700;}
    opacity: 1;
    box-shadow: 0 0 3px 0 $theme_1;
}
</style>
