const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());  //can be used form or can be handel data in backend 
app.use(express.urlencoded({extended:true}));  //  same

app.use(express.static(path.join(__dirname,'public')))  //can be used static file like images
app.set('view engine','ejs');  //can be render ejs pages


app.get('/',function(req,res){
    res.render('index')               // render pages and it is found in views folder
});


app.get('/profile/:username',(req,res)=>{   //dynamic routing
    res.send(`welcome: ${req.params.username}`)
})
app.get('/author/:username/:age',(req,res)=>{   //dynamic routing
    res.send(`welcome: ${req.params.username}, ${req.params.age}`)
})

app.listen(3000,function(){
    console.log("its running");
})

