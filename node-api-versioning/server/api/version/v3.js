const router = require('express').Router();
const userRoute = require('../routes/person-v3');
router.use('/persons', userRoute);
module.exports = router;