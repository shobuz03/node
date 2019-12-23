const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test2');
//todo schema
let todoSchema = new mongoose.Schema(
    {
        name: String,
        completed: Boolean
    }
);

//todo model
let Todo = mongoose.model('Todo', todoSchema);
//save data into database
Todo.create({ name: 'this is test data1', completed: true }).then((err, todo) => {
    console.log(err, todo);
});
