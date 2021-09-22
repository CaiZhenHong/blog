const Koa = require('koa');
const onerror = require('koa-onerror');
const json = require('koa-json') 
const logger = require('koa-logger')
const router = require('./routes')

const app = new Koa()

// error handler
onerror(app);

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(require('koa-static')(__dirname + '/public'));

router(app)

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app;
