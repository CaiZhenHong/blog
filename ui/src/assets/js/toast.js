import store from '@/store'

export default function({msg, type}){
    store.commit('updateToast',{msg,type})
}
