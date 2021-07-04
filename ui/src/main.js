import Vue from 'vue';
import router from './router';
import App from './App.vue';
import '@/assets/style/reset.scss'
import '@/assets/style/iconfont.scss'
import '@/plugins/mock'
import * as filters from '@/filters'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
