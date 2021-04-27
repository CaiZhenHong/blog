import server from '@/plugins/axios'


// 获取用户信息
export function getUser(params) {
    return server({
        method: 'GET',
        url: '/get/user',
        params
    })
}

export function sendEmail(data) {
    return server({
        method: "POST",
        url: "/post/sendEmail",
        data
    })
}