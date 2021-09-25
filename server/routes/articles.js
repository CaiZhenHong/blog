
const router = require('koa-router')({prefix:'/v1/api'});
const { getArticleCatlogue, getCatllogueParticulars, getArticlesNew, putArticlesInfo, getArticleInfo, putArticleCatlogue } = require('../controllers/articles')

// 获取文章目录
router.get('/articles_catlogue', getArticleCatlogue);


router.put('/articles_catlogue', putArticleCatlogue);

// 获取文章目录详情
router.get('/articles_catlogue_particulars', getCatllogueParticulars);

// 获取最近文章
router.get('/articles_new', getArticlesNew);

// 更新文章的信息（点赞）
router.put('/article/info', putArticlesInfo);

// 获取今日昨日文章信息
router.get('/articles/info', getArticleInfo);

module.exports = router;
