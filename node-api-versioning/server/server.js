'use strict';
const express = require('express');
const app = express();

const api = require('./api/api');
require('./middleware/app')(app);
//require('mongoose').connect('mongodb://127.0.0.1:27017/mongoapi', { useNewUrlParser: true });
app.use('/api', api);

module.exports = app;