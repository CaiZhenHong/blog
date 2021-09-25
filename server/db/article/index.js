const articleModel = require('./model')

const getArticles = function(userName) {
    return articleModel.find({userName})
}

const postArticle = function(article) {
    return articleModel.create(article)
}

module.exports = {
    getArticles,postArticle
}
