import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const Home = () => import('@/view/Home/Home.vue')
const routes = [
  {
    path: '/',
    component: Home
  }
]
const router = new VueRouter({ mode: 'hash', routes })
export default router
