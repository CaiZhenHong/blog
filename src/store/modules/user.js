import { get_user } from '@/services/user';
import { UPDATE_USER } from '../type'

export default {
  namespaced: true,

  state: {
    links: null,
    info: null,
    name: '',
    photo: '',
    logo: "",
    articles: []
  },

  mutations: {
    [UPDATE_USER](state, data) {
      let { links, info, name, photo, logo, articles } = data;
      state.links = links;
      state.info = info;
      state.name = name;
      state.photo = photo;
      state.logo = logo;
      state.articles = articles;
    }
  },



  actions: {
    getUser({ commit }) {
      get_user('1229542068@qq.com').then((data) => {
        commit(UPDATE_USER, data.data)
      });
    }
  },
}