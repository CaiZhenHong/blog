import service from '@/plugins/axios';

export function getUserInfo() {
  return service({
    method: 'GET',
    url: '/get/user/info',
  })
}