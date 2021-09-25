const articleModel = require('./model')

const getArticles = function(userName) {
    return articleModel.find({userName})
}

module.exports = {
    getArticles
}
