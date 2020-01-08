const router = require('express').Router();
const v1Route = require('./version/v1');
const v2Route = require('./version/v2');
const v3Route = require('./version/v3');

router.use('/v1', v1Route);
router.use('/v2', v2Route);
router.use('/v3', v3Route);

module.exports = router;