const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/user-registration-db', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})