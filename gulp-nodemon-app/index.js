'use strict';
let express=require('express');
let app=express();

let port=process.env.PORT || 3000;
app.get('/',(req,res)=>{
    let mu=14;
    let ll=mu+14;
    res.send('Welcome ahasan to my gulp api edit another...'+ll);
});
 app.listen(port,()=>console.log('Gulp is running on Port:'+ port));