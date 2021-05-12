import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('@/views/home/Home.vue');
const Login = () => import('@/views/login/Login.vue')

const SignUpContainer = () => import('@/views/sign-up/Index.vue')
const SignUpView = () => import('@/views/sign-up/children/SignUp.vue')
const SignUpLoading = () => import("@/views/sign-up/children/Loading.vue")

const User = () => import('@/views/user/User.vue')
const UserCatlog = () => import("@/views/user/children/catalog/Catalog.vue")
const UserSetting = () => import("@/views/user/children/setting/Setting.vue")
const UserSettingBasicInfo = () => import("@/views/user/children/setting/children/BasicInfo.vue");
const UserSettingIndividuation = () => import("@/views/user/children/setting/children/Individuation.vue");
const UserSettingAccount = () => import("@/views/user/children/setting/children/Account.vue");

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
    component: User,
    children: [
      {
        path: '',
        component: UserCatlog
      },
      {
        path: '',
        component: UserSetting,
        children: [
          {
            path: '',
            name: "user-setting-basic-info",
            component: UserSettingBasicInfo
          },
          {
            path: "",
            name: "user-setting-individuation",
            component: UserSettingIndividuation
          },
          {
            path: "",
            name: "user-setting-account",
            component: UserSettingAccount
          }
        ]
      },

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
