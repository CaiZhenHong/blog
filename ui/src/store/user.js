import { get_user, login, logout } from '@/api'

export default {

  namespaced: true,

  state: {
    info: JSON.parse(localStorage.getItem('user')),
    login: localStorage.getItem('login'),
  },

  mutations: {
    updateUserInfo(state, payload){
      state.info = Object.assign({}, payload)
      localStorage.setItem('user', JSON.stringify(payload))
    },
    updateLoginInfo(state, payload){
      state.login = payload
      localStorage.setItem('login', JSON.stringify(payload))
    },
    updateLogoutInfo(state,payload){
      state.login = payload
      localStorage.setItem('login', JSON.stringify(payload))
    }
  },

  actions: {
    getUserInfo({commit}){
     return get_user().then(({ data }) => {
      commit('updateUserInfo', data)
     })
    },
    login({commit}, payload){
      return login(payload).then(({code}) => {
        commit('updateLoginInfo', !code)
      })
    },
    logout({commit}){
      return logout().then(({code}) => {
        commit('updateLogoutInfo', Boolean(code))
      })
    }
  },
}
