'use strict';
const express = require('express');
const app = express();

const apiRoute = require('./api/api');
require('./middleware/app')(app);
//require('mongoose').connect('mongodb://127.0.0.1:27017/mongoapi', { useNewUrlParser: true });
app.use('/api', apiRoute);

module.exports = app;