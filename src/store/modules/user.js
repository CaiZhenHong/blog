import { get_user_info, put_user_basic, post_user_login } from '@/services/user';
import { UPDATE_USER_INFO } from '../type'

export default {
  namespaced: true,

  state: {
    links: null,
    bio: "",
    occupation: "",
    city: "",
    edc: "",
    name: '',
    photo: '',
    logo: "",
    articles: [],
    login: ""
  },

  mutations: {
    [UPDATE_USER_INFO](state, data) {
      for (const key in data) {
        state[key] = data[key]
      }
    }
  },



  actions: {
    getUserInfo({ commit }, id) {
      return new Promise(resolve => {
        get_user_info(id).then((data) => {
          commit(UPDATE_USER_INFO, data.data)
          resolve()
        });
      })
    },

    // 登录
    actionsLogin: function ({ commit }, { email, password }) {
      return post_user_login(email, password).then((data) => {
        commit(UPDATE_USER_INFO, data.data);
      })
    },

    updateBasicInfoActions({ state }) {
      put_user_basic(state.info, state.photo, state.name)
    }
  },
}