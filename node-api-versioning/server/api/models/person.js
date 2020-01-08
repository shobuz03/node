const mongoose=require('mongoose');

const Genders=Object.freeze({
    Male:'male',
    Female:'female',
    Other:'other'
});

const PersonSchema=new mongoose.Schema({
    name:String,
    gender:{
        type:String,
        enum:Object.values(Genders)
    }
});
Object.assign(PersonSchema.statics,{Genders});
module.exports=mongoose.model('person',PersonSchema);