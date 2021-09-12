const model = {
  linkList: [
    { name: '首页' },
    { name: '目录' },
    { name: '导航' },
    { name: '关于我' }
  ],
  newBtn: { name: '写作', icon: '&#xe62f;' },
  langBtn: { name: 'i18n', icon: '' },
  lang: localStorage.getItem('lang'),
  login: false
}

export default function() {
  return model
}
