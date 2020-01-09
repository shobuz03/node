const express = require('express')
const app = express()
const path = require('path')
const fileUpload = require('express-fileupload')
var bodyParser = require('body-parser')
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(fileUpload())
app.use('/static', express.static('public'))
app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname + '/index.html'));
})
app.get('/ping', (req, res) => {
    res.send('ping')
});
app.post('/upload', (req, res) => {
    let sampleFile;
    let uploadPath;
    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No file were uploded!');
    }
    console.log(req.files);
    sampleFile = req.files.sampleFile;

    uploadPath = __dirname + '/public/' + sampleFile.name;

    sampleFile.mv(uploadPath, function (err) {
        if (err) {
            return res.status(500).send(err);
        }

        res.send('File uploaded to ' + uploadPath);
    });
})

app.listen(port, () => console.log('server is running on port' + port))