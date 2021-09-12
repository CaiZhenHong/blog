import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/common.scss'
import '@/assets/css/reset.css'
import '@/assets/css/iconfont.scss'
import store from './store'
import router from './router'
import useComponents from '@/assets/js/useComponents'
import initApplication from '@/assets/js/initApplication'
import i18n from '@/i18n'

Vue.config.productionTip = false

useComponents()
initApplication()

new Vue({ router, store, i18n, render: (h) => h(App) }).$mount('#app')
