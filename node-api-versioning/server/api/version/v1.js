const router = require('express').Router();
const userRoute = require('../routes/person-v1');
router.use('/persons', userRoute);
module.exports = router;