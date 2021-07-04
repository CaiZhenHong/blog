import service from '@/plugins/axios';

export function getArticleNew() {
  return service({
    method: 'GET',
    url: '/get/article/new',
    params: {
      limit: 1,
    },
  })
}

export function getArticleCatlog(tag1) {
  return service({
    method: 'GET',
    url: '/get/article/catlog',
    params: {
      tag1
    },
  })
}

export function getKblist(tag1) {
  return service({
    method: 'GET',
    url: '/get/kblist',
    params: {
      tag1
    },
  })
}