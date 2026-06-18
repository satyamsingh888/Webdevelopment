const express   = require('express')
const app = express();

app.get("/", function(req,res){
    res.send("champion mera chacha nahi hai ")
})


app.get("/profile", function(req,res){
    res.send("champion mera bhai hamesha se hai or tha ")
})

app.listen(3000);