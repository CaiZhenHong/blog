import { get_user, login, logout } from '@/api'
import Toast from '@/assets/js/toast'
import router from '@/router'
import Cookie from  'js-cookie'

export default {

  namespaced: true,

  state: {
    info: '',
    login: Boolean(Cookie.get('session')),
  },

  mutations: {
    updateUserInfo(state, payload){
      state.info = Object.assign({}, payload)
    },
    updateLoginInfo(state){
      state.login = true
      localStorage.setItem('login', JSON.stringify(true))
    },
    updateLogoutInfo(state){
      state.login = false
      Cookie.remove('session')
      Cookie.remove('seesion.sig')
      Toast({msg:'您已退出登录', type:'succeed'})
      router.replace({name:'HomeArticleNew'})
    }
  },

  actions: {
    // 获取用户个人资料
    getUserInfo({commit, state}){
      if(state.info) return Promise.resolve(state.info)
      return get_user().then(({ data }) => {
        commit('updateUserInfo', data)
        return Promise.resolve(data)
      })
    },

    login({commit}, payload){
      return login(payload).then(({code}) => {
        if(!code) {
          commit('updateLoginInfo', !code)
          router.back()
          Toast({msg:'登录成功', type:'succeed'})
        }
      })
    },
    logout({commit}){
      return logout().then(({code}) => {
        commit('updateLogoutInfo', Boolean(code))
      })
    }
  },
}
