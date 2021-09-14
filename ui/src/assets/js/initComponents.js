import Vue from 'vue'
const importAll = require.context('../../components', true, /\.vue$/)
const getComponentName  = function(component){
  const path = component.split('/')
  return path[path.length - 1].split('.')[0]
}
export default function() {
    importAll.keys().forEach(component => { Vue.component(getComponentName(component), importAll(component).default) });
}