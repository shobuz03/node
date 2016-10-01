var express=require('express'),
mongoose=require('mongoose'),
bodyParser=require('body-parser');
var db=mongoose.connect('mongodb://localhost:27017/mymongo');
var Book=require('./models/bookModel');
var app=express();
var port=process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var bookRouter=express.Router();
bookRouter.route('/books')
.post(function(req,res){
  var book=new Book(req.body);
  console.log(book);
  res.send(book);
})
.get(function(req,res){
//var responseJson={hello:"This is my api"};
Book.find(function(err,books){
if(err)
{
  console.log(err);
}
else
{
  res.json(books);
}
});
//res.json(responseJson);
});
app.use('/api',bookRouter);

app.get('/', function (req, res) {
  res.send('Hello World another change again!');
});

app.listen(port, function () {
  console.log('Ranning on port '+port);
});