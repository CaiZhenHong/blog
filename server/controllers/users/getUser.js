const errorModel = require('../../model/errorModel')
const succeedModel = require('../../model/succeedModel')
module.exports = function(ctx, next){
    const { count, password } = ctx.request.body
    ctx.status = 200
    ctx.body = succeedModel({
        "code": 19,
        "data": {
            "name": "进料九展",
            "job": "consequat laboris esse amet eiusmod",
            "address": "陕西省衡阳市万荣县",
            "photo_url": "http://dummyimage.com/400x400",
            "links": [
                {
                    "name": "github",
                    "url": "http://nkk.np/reuudfxok"
                },
                {
                    "name": "bilibili",
                    "url": "http://dcfmwofbhy.mo/gdoo"
                }
            ]
        }
    })
}
