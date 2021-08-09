const express = require('express');
const app = express();
const path = require('path')

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.get('/', (req, res) => {
    res.render("index",{
        pageTitle: 'WAP Form',
        Name: 'Name',
        Age: 'Age',
        Submit: 'Submit Query',
    })
});
app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    if (!name) {
        name = "unknown";
    }
    if (!age) {
        age = "unknown"
    }
    res.render("output", {
        name: name,
        age: age,
    })
});
app.listen(3000);