const errorModel = require('../../model/errorModel')
const succeedModel = require('../../model/succeedModel')
const {getArticles} = require('../../db/article/index')
module.exports = async function(ctx, next){
    let docs = await getArticles()
    console.log(docs);
    ctx.body = succeedModel([])
}
