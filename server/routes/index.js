const routes = require('require-all')({
  dirname: __dirname,
})

module.exports = function(app){
  app.use(routes.users.routes(), routes.users.allowedMethods());
  app.use(routes.articles.routes(), routes.users.allowedMethods());
}
