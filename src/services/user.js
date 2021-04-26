import server from '@/plugins/axios'


export function getUser(params) {
    return server({
        method: 'GET',
        url: '/get/user',
        params
    })
}