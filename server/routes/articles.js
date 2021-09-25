
const router = require('koa-router')({prefix:'/v1/api'});
const { getArticleCatlogue, getCatllogueParticulars, getArticlesNew, putArticlesInfo, postArticleCatlogue } = require('../controllers/articles')

// 获取文章目录
router.get('/articles_catlogue', getArticleCatlogue);

router.post('/articles_catlogue', postArticleCatlogue);

// 获取文章目录详情
router.get('/articles_catlogue_particulars', getCatllogueParticulars);

// 获取最近文章
router.get('/articles_new', getArticlesNew);

// 更新文章的信息（点赞）
router.put('/article/info', putArticlesInfo);

module.exports = router;
