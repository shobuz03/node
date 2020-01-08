const router = require('express').Router();

router.use('/v1/person', require('./routes/person-v1'));
router.use('/v2/person', require('./routes/person-v2'));
router.use('/v3/person', require('./routes/person-v3'));

module.exports = router;