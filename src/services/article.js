import service from '@/plugins/axios';

export function getAriticles(params) {
  return service({
    method: 'GET',
    url: '/get/article',
    params
  })
}

export function getComments(params) {
  return service({
    method: 'GET',
    url: '/get/comments',
    params
  })
}