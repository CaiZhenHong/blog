import api from './request'

export const get_articles_new = function (){
  return api.get('/articles_new')
}

export const get_articles_catlogue = function (){
  return api.get('/articles_catlogue')
}

export const put_article_info = function (){
  return api.put('/article_info')
}
