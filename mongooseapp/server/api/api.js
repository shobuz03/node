const router = require('express').Router();

router.use('/person', require('./person/personRoute'));

module.exports = router;