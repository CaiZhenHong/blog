import api from './request'

export const get_user = function (){
  return api.get('/user')
}
