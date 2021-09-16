import Vue from 'vue'
import filters from '@/util/filters'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})