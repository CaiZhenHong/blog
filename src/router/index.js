import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('@/views/home/Home.vue');
const Login = () => import('@/views/login/Login.vue')

const SignUpContainer = () => import('@/views/sign-up/Index.vue')
const SignUpView = () => import('@/views/sign-up/children/SignUp.vue')
const SignUpLoading = () => import("@/views/sign-up/children/Loading.vue")

const User = () => import('@/views/user/User.vue')
const UserProfile = () => import('@/views/user/children/profile/Profile.vue')
const UserCatalog = () => import("@/views/user/children/catalog/Catalog.vue")
const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: "login",
    path: '/login',
    component: Login
  },

  {
    path: "/sign-up",
    component: SignUpContainer,
    children: [
      {
        path: '/',
        component: SignUpView,
      },
      {
        path: "/sign-up/loading",
        component: SignUpLoading,
        name: 'sign-up-loading',
        props: true,
      }
    ]
  },

  {
    path: '/user',
    name: "user",
    component: User,
    children: [
      {
        path: '/user/profile',
        name: "user_profile",
        component: UserProfile
      },
      {
        path: "/user/catalog",
        name: "user_catalog",
        component: UserCatalog
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
