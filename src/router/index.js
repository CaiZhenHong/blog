import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('@/views/home/Home.vue');
const Login = () => import('@/views/login/Login.vue')

const RegisterContainer = () => import('@/views/register/Register.vue')
const RegisterView = () => import('@/views/register/register/Register.vue')
const RegisterLoading = () => import("@/views/register/loading/Loading.vue")
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
    path: "/register",
    component: RegisterContainer,
    children: [
      {
        path: '/',
        component: RegisterView
      },
      {
        path: "/register/loading",
        component: RegisterLoading
      }
    ]
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
