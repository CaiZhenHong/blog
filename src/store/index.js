import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import user from './modules/user'
import { SHOW_MSG } from './type'

export default new Vuex.Store({
  state: {
    msgBox: {
      type: "",
      text: "",
      flag: 0
    }
  },
  mutations: {
    [SHOW_MSG](state, payload) {
      Object.assign(state.msgBox, payload);
      state.msgBox.flag += 1;
    }
  },
  actions: {

  },
  modules: {
    user
  },
});
