var usersRouter = require('./users');

/**
 * @description 路由管理
 * @param {*} app 
 */
var RouterInit = function(app) {
  app.use('/users', usersRouter)
}

module.exports = RouterInit;
