const express = require('express');
const app = express();
const path = require('path')

app.use(express.json());                           //form ka data backend me  handle kar payennge        
app.use(express.urlencoded({extended:true}))         //same
app.use(express.static(path.join(__dirname,'public'))) //public images static file can be used

app.set('view engine','ejs')   //cann be rander ejs pages

app.get('/', function (req,res) {
    res.render('index')
})

app.listen(3000,function () {
    console.log("it is runnig");
})

