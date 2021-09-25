const errorModel = require('../../model/errorModel')
const succeedModel = require('../../model/succeedModel')
const {postArticle} = require('../../db/article/index')
module.exports = async function(ctx, next){
    let docs = await postArticle(ctx.request.body)
    ctx.body = succeedModel(docs)
}
