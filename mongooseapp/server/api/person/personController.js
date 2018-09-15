'use strict';
let Person=require('./personModel');
const {Genders}=require('./personModel');
exports.get=(req,res)=>{
Person.find({},(err,person)=>{
    if(err)
      res.send(err);
    res.json(person);
});
};

exports.post=(req,res)=>{
     let person=new Person(req.body);
     person.save((err,person)=>{
         if(err)
           res.send(err);
        res.json(person);
     });
};