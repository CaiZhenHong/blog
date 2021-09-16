// 初始化应用
import store from '@/store'
export const initApplication = function(){
  const inited = localStorage.getItem('lang')
  if(!inited){
    localStorage.lang = 'zh'
    store.dispatch('user/getUserInfo')
  }
}