import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const instance = axios.create({
    baseURL: '/v1/api'
})

// 请求拦截器
axios.interceptors.request.use(
    config => {
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// 响应拦截器
axios.interceptors.response.use(
    response => {
        return response
    },
    err => {
        return Promise.reject(err)
    }
)

export default instance
