'use strict'
const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/users', (req, res) => {
    res.json({
        name: "Ahasan",
        age: 35
    });
});
router.post('/users', async (req, res) => {
    //create a new user
    try {
        const user = new User(req.body);
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({
            user,
            token
        });
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/users/login', async (req, res) => {
    //Login a registered user
    try {
        const {
            email,
            password
        } = req.body;
        console.log({
            email,
            password
        });
        const user = await User.findByCredentials(email, password);
        if (!user) {
            return res.status(401).send({
                error: 'Login failed! check authentication'
            });
        }
        const token = await user.generateAuthToken();
        res.send({
            user,
            token
        });
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;