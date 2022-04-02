var express = require('express');
var router = express.Router();
var { oauth } = require('../controller')



/**
 * @swagger
 * /oauth:
 *   post:
 *     description: 调用 java 服务鉴权
 *     responses:
 *       200:
 *         description: 返回鉴权数据.
 */
router.post('/', function (req, res, next) {
    oauth(req, res, next)
});

module.exports = router;
