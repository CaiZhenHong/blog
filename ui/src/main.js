import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import '@/assets/style/reset.scss'
import '@/assets/style/iconfont.scss'
import '@/assets/style/common.scss'
import '@/assets/style/theme.scss'
import {initComponents, initApplication} from './assets/js';

initComponents()
initApplication()

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
