const errorModel = require('../../model/errorModel')
const succeedModel = require('../../model/succeedModel')
module.exports = function(ctx, next){
    const { count, password } = ctx.request.body
    ctx.status = 200
    ctx.body = succeedModel({
        "like_count": {
            "today": 36,
            "yesterday": 86
        },
        "read_count": {
            "today": 13,
            "yesterday": 87
        }
    })
}
