import api from './request'

export const get_articles_new = function (){
  return api.get('/articles_new')
}

export const get_articles_catlogue = function (){
  return api.get('/articles_catlogue')
}

export const post_articles_catlogue = function(data) {
  return api.post('/articles_catlogue',{newCatlogue: data})
}

export const post_article = function(data) {
  return api.post('/article',data)
}

export const get_articles_catlogue_particulars = function (){
  return api.get('articles_catlogue_particulars')
}

export const put_article_info = function (){
  return api.put('/article/info', 1,{
    delay: true
  })
}
