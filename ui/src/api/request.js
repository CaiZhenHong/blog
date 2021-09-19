import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, Axios)
const axios = Axios.create({
  baseURL: 'v1/api',
  timeout: 300000,
  withCredentials: true,
  crossDomain:true
})

const interceptors = {
  getDelay: function(value){
    if(!value.config) {
      value.delay = value.delay && new Date().getTime()
    }else{
      value.data.delay = value.config.delay && new Date().getTime() - value.config.delay
    }
  }
}

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  interceptors.getDelay(config)
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  interceptors.getDelay(response)
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export default axios
