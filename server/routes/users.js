
const router = require('koa-router')({prefix:'/v1/api'});
const { login } = require('../controllers/users')

router.post('/login', login);

module.exports = router;
