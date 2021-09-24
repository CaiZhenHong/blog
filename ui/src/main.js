import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import Toast from './assets/js/toast'
import Dialog from './assets/js/dialog'
import '@/assets/style/reset.scss'
import '@/assets/style/iconfont.scss'
import '@/assets/style/common.scss'
import '@/assets/style/theme.scss'
import '@/assets/style/articleView.scss'
import {initApplication} from './assets/js';

initApplication()
Vue.prototype.$toast = Toast
Vue.prototype.$dialog = Dialog
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
