const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test1', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})