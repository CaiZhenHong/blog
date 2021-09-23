
const router = require('koa-router')({prefix:'/v1/api'});
const { login, logout, getUser } = require('../controllers/users')

router.post('/login', login);
router.delete('/logout', logout);
router.get('/user', getUser);

module.exports = router;
