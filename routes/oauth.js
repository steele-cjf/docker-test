var express = require('express');
var router = express.Router();
var { oauth } = require('../controller')



/**
 * @swagger
 * /login:
 *   post:
 *     description: 接口描述
 *     responses:
 *       200:
 *         description: Returns a success string.
 */
router.post('/login', function (req, res, next) {
    oauth(req, res, next)
});

module.exports = router;
