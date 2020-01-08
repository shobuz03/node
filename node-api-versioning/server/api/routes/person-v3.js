const router = require('express').Router();

router.route('/')
    .get((req, res) => {
        res.send({ message: 'api version 3' });
    })

module.exports = router;