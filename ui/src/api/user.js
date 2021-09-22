import api from './request'

export const get_user = function (){
  return api.get('/user')
}

export const login = function(data) {
  return api.post('/login', data)
}
