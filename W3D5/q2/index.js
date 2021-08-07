const express = require("express");
const app = express(); 
app.use(express.urlencoded({extended: false}))
app.get('/',(req,res,next)=>{
    res.send(`<form action = result  method=POST>
        <label for="name">Name</label>
        <input type="text" name="name" id ="name">
        <label for="age">Age</label>
        <input type="text" name="age" id ="age">
        <button type="submit" id ="btn">Submit Query</button>
    </form>`);
});

app.post('/result',(req,res)=>{
let name = req.body.name;
let age = req.body.age;
res.send(`Welcome ${name} Age: ${age}`);
})

app.listen(3000,()=>{
    console.log("Started on PORT 3000");
}
)