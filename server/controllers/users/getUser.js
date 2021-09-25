const errorModel = require('../../model/errorModel')
const succeedModel = require('../../model/succeedModel')
const {getAccount} = require('../../db/users/index')
const {userName} = require('../../../config/dev.config').base
module.exports = async function(ctx, next){
    const doc = await getAccount(userName)
    ctx.body = await succeedModel(doc)
    next()
}
