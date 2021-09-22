
const router = require('koa-router')({prefix:'/v1/api'});
const { login } = require('../controllers/user')

router.get('/', login);

module.exports = router;
