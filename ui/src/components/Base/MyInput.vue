<template>
    <div class="bd h35 f14 flex myinput" :class="[ `w${width}`, `h${height}`, {[`w${focusWidth}`]: focus}, {focus}, {verifyError} ]">
        <div iconfont class="fcenter icon fw500 blue_1" v-html="icon"></div>
        <input class="fit-width fit-height black_3 input" :placeholder="placeholder" :type="type" @blur="focusHandle(false)" @focus="focusHandle(true)" v-model="inputValue" @input="sentValue">
    </div>
</template>

<script>
export default {
    data:function(){
        return { focus: false, inputValue: this.value}
    },

    props:{
        placeholder:{ type: String },
        width: { type: String },
        height: { type: String },
        focusWidth: {type: String},
        icon:{ type: String },
        type:{type: String, default: 'text'},
        verifyError:{type: Boolean, default:false},
        value: {type: String, require: true}
    },

    methods: {
        focusHandle: function(flag){
            this.focus = flag
        },
        sentValue: function(){
            this.$emit('input', this.inputValue)
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
.input {
    letter-spacing: 1px;
    &::placeholder {
        color: $blue_1;
        letter-spacing: 2px;
        font-size: 12px;
    }
}
.focus{
    border-color: $theme_1;
    .icon{font-weight: 700;}
    opacity: 1;
    box-shadow: 0 0 3px 0 $theme_1;
}
.verifyError{
    border-color: $red_1;
    box-shadow: 0 0 3px 0 $red_1;
}
</style>
