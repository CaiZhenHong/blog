import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Toast from '../assets/js/toast'
import router from '@/router'

Vue.use(VueAxios, Axios)

const axios = Axios.create({
  baseURL: 'v1/api',
  timeout: 10000,
  withCredentials: true,
  crossDomain:true
})

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  if(/timeout/g.test(error)) Toast({msg:'网络连接失败，请重试'})
  if(error.response.status == 404) router.replace('404')
  return Promise.reject(error);
});

export default axios
