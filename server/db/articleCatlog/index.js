const articleModel = require('./model')

const postArticleCatlog = function(catlogName) {
    return articleModel.create({title:catlogName})
}

const getArticlesCatlogue = function () {
    return articleModel.find()
}

module.exports = {
    postArticleCatlog,
    getArticlesCatlogue
}
