var express = require('express');
var router = express.Router();
var { oauth } = require('../controller')


router.use(function (req, res, next) {
    oauth(req, res, next)
});

module.exports = router;
