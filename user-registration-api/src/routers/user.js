'use strict'
const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
    res.json({
        name: "Ahasan",
        age: 35
    });
});

module.exports = router;