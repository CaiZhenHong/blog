import service from '@/plugins/axios';

export function post_article(data) {
  return service({
    method: 'POST',
    url: '/post/article',
    data
  })
}
