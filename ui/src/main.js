import Vue from 'vue';
import App from './App.vue';
import '@/assets/style/reset.scss'
import '@/assets/style/iconfont.scss'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
