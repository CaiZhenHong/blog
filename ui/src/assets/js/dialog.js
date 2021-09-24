import store from '@/store'

export default function({
    title='标题',
    cancelText='取消',
    confirmText='确认',
    confirm=function(){},
    cancel=function(){},
}){
    store.commit('updateDialog',{ title,cancelText,confirmText,confirm,cancel})
}
