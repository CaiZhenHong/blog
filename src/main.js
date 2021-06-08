import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/scss/reset.scss';
import '@/assets/scss/iconfont.scss';
import '@/views/editor/editor.scss';
import Highlight from '@/plugins/hljs';
Vue.use(Highlight);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
