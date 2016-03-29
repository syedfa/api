var koa = require('koa');
var app = koa();

app.use(function *() {
  this.body = "Hello, Halal Data API v1.";
});

app.listen(3000);
