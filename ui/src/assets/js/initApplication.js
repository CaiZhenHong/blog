import store from '@/store'

export default function () {
  const inited = localStorage.getItem('lang')
  if (!inited) {
    localStorage.lang = 'zh'
  }
  store.dispatch('getUserInfo')
}
