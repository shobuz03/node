const mongoose = require('mongoose')
//mongoose.connect('mongodb://localhost/user-registration-db', {
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})