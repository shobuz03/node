const router = require('express').Router();

router.use('/person', require('./routes/person'));

module.exports = router;