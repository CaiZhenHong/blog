// 导入 axios 并进行二次封装
import axios from "axios";
import VueAxios from 'vue-axios';
import Vue from "vue";


Vue.use(VueAxios, axios);

const BASEURL = process.env.NODE_ENV === 'development' ? '/api' : 'https:api.czh996.top';

const service = axios.create({
    timeout: 6000 * 10, // 请求超时时间 6s
    baseURL: BASEURL, // 基础路径
    withCredentials: true // 会自动带上 cookie
})

// 请求拦截器，暂时未使用
service.interceptors.request.use(
    config => {
        if (config.method !== 'GET') {
            config.headers.Authorization = window.localStorage.getItem('token')
        }
        return config;
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(response => {
    return response.data;
},
    error => {

        switch (error.response.status) {
            case 502:
                error.message = '请检查网络连接';
                break;
            case 400:
                error = error.response.data.msg
                break
        }
        return Promise.reject(error)
    }
)

export default service;