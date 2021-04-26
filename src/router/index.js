import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('@/views/home/Home.vue');
const Login = () => import('@/views/login/Login.vue')
const Register = () => import('@/views/register/Register.vue')
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/:email',
    component: Home
  },
];

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
