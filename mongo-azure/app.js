var MongoClient = require('mongodb').MongoClient;
// Connection URL
var url = 'mongodb://52.163.215.27:27017/mymongo';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
    
   db.collection('Persons', function (err, collection) {
        
         collection.find().toArray(function(err, items) {
            if(err) throw err;    
            console.log(items);            
        });
        
    });
    db.close();
                
});