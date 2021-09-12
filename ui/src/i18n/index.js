import Vue from 'vue'
import I18n from 'vue-i18n'

Vue.use(I18n)

const i18n = new I18n({
  locale: localStorage.getItem('lang'),
  messages: {
    zh: require('./zh.json'),
    en: require('./en.json')
  }
})

export default i18n
