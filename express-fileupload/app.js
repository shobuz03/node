const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')
const port = 8000

app.get('/ping', (req, res) => {
    res.send('ping')
});

app.listen(port, () => console.log('server is running on port' + port))