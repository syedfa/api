var koa = require('koa');
var app = koa();

app.use(function *() {
  this.body = "Halal Data API v1.";
});

app.listen(3000);
