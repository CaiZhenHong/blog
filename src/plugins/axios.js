// 导入 axios 并进行二次封装
import axios from "axios";
import VueAxios from 'vue-axios';
import Vue from "vue";


Vue.use(VueAxios, axios);

const service = axios.create({
    timeout: 6000 * 10, // 请求超时时间 6s
    baseURL: '/api', // 基础路径
    withCredentials: true // 会自动带上 cookie
})

// 请求拦截器，暂时未使用
service.interceptors.request.use(
    config => {
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
        switch (error.response) {
            case 502:
                error.message = '请检查网络连接';
                break;
        }
        return Promise.reject(error.message)
    }
)

export default service;