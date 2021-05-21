import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('@/views/home/Home.vue');
const Login = () => import('@/views/login/Login.vue')

const SignUpContainer = () => import('@/views/sign-up/Index.vue')
const SignUpView = () => import('@/views/sign-up/children/SignUp.vue')
const SignUpLoading = () => import("@/views/sign-up/children/Loading.vue")

const Setting = () => import('@/views/setting/Setting.vue');
const SettingAccount = () => import('@/views/setting/children/Account.vue');
const SettingBasicInfo = () => import('@/views/setting/children/BasicInfo.vue');
const SettingIndividuation = () => import('@/views/setting/children/Individuation.vue');

const Editor = () => import('@/views/editor/Editor.vue')


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
    path: "/setting",
    component: Setting,
    children: [
      {
        path: "",
        name: 'setting-basic-info',
        component: SettingBasicInfo
      },
      {
        path: "account",
        name: 'setting-account',
        component: SettingAccount
      },
      {
        path: "individuation",
        name: 'setting-individuation',
        component: SettingIndividuation
      }
    ]
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
    path: "/editor",
    component: Editor
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
