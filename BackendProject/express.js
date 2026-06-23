//routing and handling request in express js----

// const express   = require('express')
// const app = express();

// app.get("/", function(req,res){
//     res.send("champion mera chacha nahi hai ")
// })


// app.get("/profile", function(req,res){
//     res.send("champion mera bhai hamesha  ")
// })

// app.listen(3000);
 

//middleware in express js---

//jab bhi server request accept karta hai  waha se route ke beech pahuchne tak agar aap us request ko beech me rokte ho and kuch perform karte ho to usko middleware kehte hai

const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log("middleware chal gya"); //middleware
    next();
})
function logger(req,res,next){
    console.log("middleware chal gya ek or baar");
    next();                                            //middleware
}
app.use(logger);

app.get("/",function(req,res){
 res.send('champion mera bhai')         //route
});

app.get("/about",function(req,res){     //route
    res.send("champion mere papa")
})
app.get("/profile",function(req,res, next){
   return next(new Error("something went wrong"))
})

app.use((err,req,res,next)=>{
console.error(err.stack);
res.status(500).send("Something broke!")     //Error handling
})
app.listen(3000);