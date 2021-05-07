import server from '@/plugins/axios'


// 获取用户信息
export function getUser(params) {
    return server({
        method: 'GET',
        url: '/get/user',
        params
    })
}

/** 点击注册，向邮箱发送邮件
 * @param {String} email - 邮箱
 * @param {String} password - 密码
 * @return 
 */
export function post_email_signUp(email, password) {
    return server({
        method: "POST",
        url: "/post/email/sign-up",
        data: { email, password }
    })
}

export function post_user_login(email, password) {
    return server({
        method: "POST",
        url: '/post/user/login',
        data: { email, password }
    })
}