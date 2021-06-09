import Vue from 'vue';

import VueRouter from 'vue-router';

import store from '@/store'

Vue.use(VueRouter);

const Home = () => import('@/views/home/Home.vue');
const HomeArticleNew = () => import("@/views/home/articles/children/ArticlesNew.vue")
const HomeArticleCatlog = () => import("@/views/home/articles/children/articleCatlog/ArticleCatlog.vue")


const Login = () => import('@/views/login/Login.vue')

const SignUpContainer = () => import('@/views/sign-up/Index.vue')
const SignUpView = () => import('@/views/sign-up/children/SignUp.vue')
const SignUpLoading = () => import("@/views/sign-up/children/Loading.vue")

const Setting = () => import('@/views/setting/Setting.vue');
const SettingAccount = () => import('@/views/setting/children/Account.vue');
const SettingBasicInfo = () => import('@/views/setting/children/BasicInfo.vue');
const SettingIndividuation = () => import('@/views/setting/children/Individuation.vue');

const Editor = () => import('@/views/editor/Editor.vue')

const Profile = () => import('@/views/profile/Profile.vue')

const Article = () => import("@/views/ariticle/Article.vue")


const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
    redirect: "/new",
    children: [
      {
        path: 'new',
        component: HomeArticleNew,
      },
      {
        path: 'catlog',
        component: HomeArticleCatlog
      }
    ]
  },

  {
    name: "login",
    path: '/login',
    component: Login
  },
  {
    path: "/setting",
    component: Setting,
    beforeEnter: function (to, from, next) {
      to; from;
      if (store.state.user.token) {
        next()
      } else {
        next('/login')
      }
    },
    children: [
      {
        path: "basic",
        component: SettingBasicInfo
      },
      {
        path: "account",
        component: SettingAccount
      },
      {
        path: "individuation",
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
        beforeEnter: function (to, from, next) {
          to; from;
          if (from.path === '/sign-up') {
            next()
          } else {
            next('/login')
          }
        },
      }
    ]
  },

  {
    path: "/editor",
    component: Editor
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/article',
    component: Article
  },

  {
    path: '/:email',
    component: Home,
    redirect: "/:email/new",
    children: [
      {
        path: 'new',
        component: HomeArticleNew,
      },
      {
        path: 'catlog',
        component: HomeArticleCatlog
      }
    ]
  },
];

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
