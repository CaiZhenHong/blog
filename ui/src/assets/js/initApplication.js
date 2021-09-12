export default function() {
  const inited = localStorage.getItem('lang')
  if (!inited) {
    localStorage.lang = 'zh'
  }
}
