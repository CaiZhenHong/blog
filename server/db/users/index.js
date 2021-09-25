const userModel = require('./model')

const getAccount = function(userName) {
    return userModel.findOne({userName})
}

module.exports = {
    getAccount
}
