const express = require("express");
const path = require("path")
const app = express(); 
const date = new Date();
const hour = date.getHours();
app.use(express.urlencoded({extended: false}))

if(hour>6 && hour<18){
    app.use('/css', express.static(path.join(__dirname, 'css/day.css')));
}
else{
    app.use('/css', express.static(path.join(__dirname, 'css/night.css')));
}
app.get('/',(req,res)=>{
res.sendFile(__dirname+"/index.html");
});

app.post('/result',(req,res)=>{
let name = req.body.name;
let age = req.body.age;
res.send(`Welcome ${name} age ${age}`);
})

app.listen(3000,()=>{
    console.log("Started on PORT 3000");
}
)