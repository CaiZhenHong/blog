import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import { GET_USER, GET_EMAIL } from './type'
import { getUser } from '@/services/user'

import home from '@/modules/home/store'

export default new Vuex.Store({
  state: {
    email: "", // 邮箱号码
    user: null // 用户信息
  },
  mutations: {
    // 获取邮箱号码
    [GET_EMAIL](state, email) {
      state.email = email;
    },

    // 获取用户信息
    [GET_USER](state, info) {
      state.user = info
    }
  },
  actions: {
    // 获取用户信息
    getuser({ commit, state }) {
      getUser({ email: state.email }).then(data => {
        commit(GET_USER, data.data)

      })
    }
  },
  modules: {
    home
  },
});
