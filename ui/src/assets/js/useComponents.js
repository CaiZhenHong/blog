import Vue from 'vue'
const importAll = require.context('../../components', true, /\.vue$/)
export default function() {
    importAll.keys().forEach(component => { Vue.component(component.replace(/\.\//,'').replace(/\.vue$/,''), importAll(component).default) });
}
