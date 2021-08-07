const express = require('express');
const app = express();
//app.set('port', 3000);
app.get('/', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    if (!name) {
    name = "person";
    age = 0;
    }
    res.send(`Welcome ${name} Age: ${age}`);
   });
   app.listen(3000);