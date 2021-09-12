import request from './request'

export default function get_user() {
    return request.get('/user')
}
