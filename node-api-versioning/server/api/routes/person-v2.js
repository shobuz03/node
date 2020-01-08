const router = require('express').Router();

//const controller = require('../controllers/person');
router.route('/')
    .get((req, res) => {
        res.send({ message: 'api version 2' });
    })

module.exports = router;