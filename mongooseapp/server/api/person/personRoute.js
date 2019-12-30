const router = require('express').Router();

const controller = require('./personController');
router.route('/')
    .get(controller.get)
    .post(controller.post);

module.exports = router;