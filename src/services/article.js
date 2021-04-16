import service from '@/plugins/axios';

export function getArticleComment(params) {
  return service({
    method: 'get',
    url: '/get/article/comment',
    params
  })
}

export function getArticleInfo(params) {
  return service({
    method: 'get',
    url: '/get/article/info',
    params
  })
}