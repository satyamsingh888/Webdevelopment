//handle backend process of forms and making sure the data coming from any frontend library,framework, templating engines,we still handle it at the backend

// session cookies

// hum log kuch bhi data frontend(browser) par rakh sakte hai , and jab bhi aap kuch bhi request backend par karoge wo frontend par saved data automatically backend par chala jayega 

const  express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/',function(req,res){
    res.send('champion mera anuj');
})
app.get('/about',function(req,res){
    res.send('champion mera bhai');
})
app.get('/profile',function(req,res,next){
   return next(new Error("Not implemennted"))
})
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send("Something broke!")  
})

app.listen(3000)