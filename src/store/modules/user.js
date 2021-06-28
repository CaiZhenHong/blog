import { get_user_info, put_user_basic, post_user_login } from '@/services/user';
import { UPDATE_USER_INFO, ACTIONS_GET_USER_INFO, ACTIONS_LOGIN } from '../type'

export default {
  namespaced: true,

  state: {
    token: window.localStorage.getItem("token"),
    photo: '',
    logo: "",
    email: "",
    links: [],
    bio: "",
    occupation: "",
    city: "",
    edc: "",
    name: '',
    tags: [],
    articles: [],
  },

  mutations: {
    [UPDATE_USER_INFO](state, data) {

      if (data.photo) {
        window.localStorage.setItem("photo", data.photo);
      }
      if (data.logo) {
        window.localStorage.setItem("logo", JSON.stringify(data.logo));
      }

      if (data.tags) {

        let tags = data.tags;

        let obj = {};

        tags.forEach((tag) => {
          obj[tag.tag1] = tag.tag2
        });

        window.localStorage.setItem("tags", JSON.stringify(obj));
      }
      Object.assign(state, data);
    }
  },



  actions: {
    // 获取用户信息
    [ACTIONS_GET_USER_INFO]({ commit }, email) {
      return get_user_info(email).then(({ data }) => {
        commit(UPDATE_USER_INFO, data)
      });
    },

    // 登录
    [ACTIONS_LOGIN]: function ({ commit }, { email, password }) {
      return post_user_login(email, password).then(({ data }) => {
        commit(UPDATE_USER_INFO, data);
        window.localStorage.setItem("emailNum", email);
        window.localStorage.setItem("token", data.token);
        window.localStorage.setItem("photo", data.photo);
        window.localStorage.setItem("logo", JSON.stringify(data.logo));
      })
    },

    updateBasicInfoActions({ state }) {
      put_user_basic(state.info, state.photo, state.name)
    }
  },
}