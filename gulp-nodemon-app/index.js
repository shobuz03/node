'use strict';
let express=require('express');
let app=express();

let port=process.env.PORT || 3000;
app.get('/',(req,res)=>{
    let mu=12;
    let ll=mu+14;
    res.send('Welcome to my gulp api edit...'+ll);
});
 app.listen(port,()=>console.log('Gulp is running on Port:'+ port));