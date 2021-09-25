import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import filters from '@/util/filters'

// 初始化应用数据
const initData = function() {
  const inited = localStorage.getItem('lang')
  if(!inited){
    localStorage.lang = 'zh'
  }
}

// 注册全局组件
const initComponents = function() {
  const importAll = require.context('../../components', true, /\.vue$/)
  const getComponentName  = function(component){
    const path = component.split('/')
    return path[path.length - 1].split('.')[0]
  }
  importAll.keys().forEach(component => { Vue.component(getComponentName(component), importAll(component).default) });
}

// 注册全局过滤器
const initFilters = function(){
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
}

export const initApplication = function() {
  initComponents()
  initFilters()
  initData()
}
