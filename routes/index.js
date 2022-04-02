var usersRouter = require('./users');
var oauthRouter = require('./oauth')

/**
 * @description 路由管理
 * @param {*} app 
 */
var RouterInit = function (app) {
  app.use(oauthRouter)
  app.use('/users', usersRouter)
}

module.exports = RouterInit;
