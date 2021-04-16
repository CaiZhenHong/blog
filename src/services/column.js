import service from '@/plugins/axios';

export function getColumn(params) {
  return service({
    method: 'get',
    url: '/get/category',
    params
  })
}