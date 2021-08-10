const express = require("express");
const path = require("path")

var parseurl = require('parseurl')
var session = require('express-session')

const app = express(); 

app.use(session({
    secret: 'Name check session',
    resave: false,
    saveUninitialized: false
  }));

  app.use((req, res, next)=> {
    if (!req.session.things) {
      req.session.things = {}
    }
    next()
  });

const date = new Date();
const hour = date.getHours();
app.use(express.urlencoded({extended: false}));
console.log(hour);
if(hour>6 && hour<18){
    
    app.use('/css/index.css', express.static(path.join(__dirname, 'css/day.css')));
    console.log("day");
}
else{
    console.log("night");
    app.use('/css/index.css', express.static(path.join(__dirname, 'css/night.css')));
    console.log(path.join(__dirname, 'css/night.css'));
   
}

app.get("/",(req,res)=>{
res.sendFile(__dirname+"/index.html");
});

app.post("/result",(req,res)=>{
    req.session.things[req.body.key]= req.body.value;
    res.redirect(303,"/next");
});

app.get("/next",(req,res)=>{
    let output = "<ul>";
    for(let key in req.session.things){
        
        output += `<li>Name: ${key}: Age: ${req.session.things[key]}</li>`;
    }
    output +=`</ul>`;
    res.send(output);
    });


app.listen(3000,()=>{
    console.log("Started on PORT 3000");
});