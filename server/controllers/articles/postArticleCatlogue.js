const errorModel = require('../../model/errorModel')
const succeedModel = require('../../model/succeedModel')
const {postArticleCatlog} = require('../../db/articleCatlog/index')
module.exports = async function(ctx, next){
    const {newCatlogue} = ctx.request.body
    let docs = await postArticleCatlog(newCatlogue)
    if(docs)  ctx.body = succeedModel([])
}
