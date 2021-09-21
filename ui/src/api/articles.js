import api from './request'

export const get_articles_new = function (){
  return api.get('/articles_new')
}

export const get_articles_catlogue = function (){
  return api.get('/articles_catlogue')
}

export const get_articles_catlogue_particulars = function (){
  return api.get('articles_catlogue_particulars')
}

export const put_article_info = function (){
  return api.put('/article/info', 1,{
    delay: true
  })
}

// 获取昨日今日阅读数据
export const get_articles_info = function() {
  return api.get('/articles/info')
}
