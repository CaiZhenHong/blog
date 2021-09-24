import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const originalPush = Router.prototype.push
const originalReplace = Router.prototype.replace
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

const Home =() => import('@/view/home/Index.vue')
const HomeArticleCatlogue = () => import('@/view/home/components/HomeArticleCatlogue/Index.vue')
const HomeArticleNew = () => import('@/view/home/components/HomeArticleNew.vue')

const ArticlesEdit = () => import('@/view/articlesEdit/Index.vue')

const Login = () => import('@/view/login/Login.vue')

const Error404 = () => import('@/view/errorPage/error_404.vue')

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: '/', component: HomeArticleNew, name: 'HomeArticleNew' },
      { path: '/catlogue', component: HomeArticleCatlogue, name: 'HomeArticleCatlogue' }
    ]
  },
  { path: '/login', component: Login, name: 'Login' },
  { path: '/article/edit', component: ArticlesEdit, name: 'ArticlesEdit' },
  { path: '/404', component: Error404, name: '404' },
]

export default new Router({ routes, mode: 'hash' })
