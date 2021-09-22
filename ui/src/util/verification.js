export const checkUserName = function(userName) {
    const empty = !userName.length && '用户名不能为空'
    const error = (/[^A-z]/g.test(userName)||userName.length>20||userName.length<2||/[\s]/g.test(userName)) && '用户名错误'
    return empty || error || false
}

export const checkPassword = function(password) {
    const empty = !password.length && '密码不能为空'
    const error = (password.length>20 || password.length<6 || /[\s]/g.test(password)) && '密码错误'
    return empty || error || false
}
