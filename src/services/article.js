import service from '@/plugins/axios';

export function post_article(data) {
  return service({
    method: 'POST',
    url: '/post/article',
    data
  })
}

export function get_articles_new(params) {
  return service({
    method: 'GET',
    url: '/get/articles/new',
    params
  })
}

export function get_articles_catlog(params) {
  return service({
    method: 'GET',
    url: '/get/articles/catlog',
    params
  })
}

export function get_article(params) {
  return service({
    method: 'GET',
    url: '/get/article',
    params
  })
}

