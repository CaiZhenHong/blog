import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import user from './user'
import article from './article'

export default new Vuex.Store({
  state: {
    toastInfo:{ msg:'', type:'error',flag:false }
  },
  mutations: {
    updateToast: function(state,{msg,type}){
      type = type?type:'error'
      state.toastInfo = {msg,type,falg:!state.falg}
    }
  },
  actions: {
  },
  modules: {
    user,
    article
  },
});
