import { get_user_info, put_user_basic } from '@/services/user';
import { UPDATE_USER_INFO } from '../type'

export default {
  namespaced: true,

  state: {
    links: null,
    info: null,
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
        console.log(data[key]);
      }
    }
  },



  actions: {
    getUserInfo({ commit }, id) {
      get_user_info(id).then((data) => {
        commit(UPDATE_USER_INFO, data.data)
      });
    },

    updateBasicInfoActions({ state }) {
      put_user_basic(state.info, state.photo, state.name)
    }
  },
}