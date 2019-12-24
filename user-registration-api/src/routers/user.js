'use strict'
const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/user', (req, res) => {
    res.json({
        name: "Ahasan",
        age: 35
    });
});
router.post('/user', async (req, res) => {
    //create a new user
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send({ user });
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;