import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* const Home = () => import('@/views/home/Home.vue');
const HomeNew = () => import('@/views/home/children/HomeNew/HomeNew.vue');
const HomeCatlog = () => import('@/views/home/children/HomeCatlog/HomeCatlog.vue');
const HomeCategories = () => import('@/views/home/children/HomeCategories/HomeCategories.vue'); */
const Home =() => import('@/view/home/Index.vue')
const HomeArticleCatlogue = () => import('@/view/home/components/HomeArticleCatlogue/Index.vue')
const HomeArticleNew = () => import('@/view/home/components/HomeArticleNew.vue')


const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: '/', component: HomeArticleNew, name: 'HomeArticleNew' },
      { path: '/catlogue', component: HomeArticleCatlogue, name: 'HomeArticleCatlogue' }
    ]
  }
/*   {
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
  }, */
]

export default new Router({ routes, mode: 'history' })
