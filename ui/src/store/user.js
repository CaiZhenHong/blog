import { get_user } from '@/api'

export default {

  namespaced: true,

  state: {
    info: null,
    login: true
  },

  mutations: {
    updateUserInfo(state, payload){
      state.info = Object.assign({}, payload)
      localStorage.setItem('user', JSON.stringify(payload))
    }
  },

  actions: {
    getUserInfo({commit}){
     return get_user().then(({ data }) => {
      commit('updateUserInfo', data)
     })
    },
  },
}
