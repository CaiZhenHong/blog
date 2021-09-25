const errorModel = require('../../model/errorModel')
const succeedModel = require('../../model/succeedModel')
const {getAccount} = require('../../db/users/index')
module.exports = async(ctx, next) => {
    const { count, password } = ctx.request.body
    let body = succeedModel({})
    if(!count || !password){ 
        body = errorModel(200400,'参数错误');
    }else{
        const doc = await getAccount(count)
        if(!doc) {
            body = errorModel(200404, '账户不存在'); 
        }else if(doc && doc.password != password){
            body = errorModel(200413, '密码错误')
        }else{
            ctx.session.account = count
        }
    }
    ctx.body = body
    await next()
}
