const errorModel = require('../../model/errorModel')
const succeedModel = require('../../model/succeedModel')
module.exports = function(ctx, next){
    const { count, password } = ctx.request.body
    ctx.session.user = count
    ctx.status = 200
    ctx.body = succeedModel({})
}
