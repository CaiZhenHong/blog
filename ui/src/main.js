import Vue from 'vue';
import router from './router';
import App from './App.vue';
import '@/assets/style/reset.scss'
import '@/assets/style/iconfont.scss'
import '@/assets/style/common.scss'
import '@/assets/style/theme.scss'
import initComponents from './assets/js/initComponents';
import * as filters from '@/filters'
import '@/plugins/mock'


Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

initComponents()

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
