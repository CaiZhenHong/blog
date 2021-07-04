import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from '@/views/home/Home.vue';
import HomeNew from '@/views/home/children/HomeNew/HomeNew.vue';
import HomeCatlog from '@/views/home/children/HomeCatlog/HomeCatlog.vue';
import HomeCategories from '@/views/home/children/HomeCategories/HomeCategories.vue';


const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/new',
    children: [
      {
        path: '/new',
        component: HomeNew
      },
      {
        path: '/catlog',
        component: HomeCatlog
      },
      {
        path: '/categories',
        component: HomeCategories
      }
    ]
  },
]

export default new Router({ routes, mode: 'history' })