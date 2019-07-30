const Koa = require('koa')
const app = new Koa()
app.use(async ctx => {
  ctx.body = 'hello worl!'
})
app.listen(8080, '0.0.0.0')
console.log('server is running on https://0.0.0.0:8080')