import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import topBar from '@/modules/topBar/store'
import home from '@/modules/home/store'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    topBar, home
  },
});
