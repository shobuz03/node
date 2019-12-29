const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ahasanmongo:Ahasan03@cluster0-p58cc.mongodb.net/test?retryWrites=true&w=majority');
//todo schema
let todoSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
});

//todo model
let Todo = mongoose.model('Todo', todoSchema);
//save data into database
Todo.create({
    name: 'this is test data1',
    completed: true
}).then((err, todo) => {
    console.log(err, todo);
});