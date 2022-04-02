var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /users/test:
 *   get:
 *     description: 接口描述
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/test', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
