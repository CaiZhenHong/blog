const errorModel = require('../../model/errorModel')
const succeedModel = require('../../model/succeedModel')
const {getArticlesCatlogue} = require('../../db/articleCatlog/index')
module.exports = async function(ctx, next){
    let docs = await getArticlesCatlogue()
    ctx.body = succeedModel(docs)
}
