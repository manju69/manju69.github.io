var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
var session = require('express-session')
//var session = require('express-session');

app.use(cookieParser('my secret here'));
// parses x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: 'fasting session',
  resave: false,
  saveUninitialized: false
}));

app.use(function (req, res, next) {
  if (!req.session.things) {
    req.session.things = {}
  }
  next()
})

app.get("/", (req, res)=>{
  let output = '<ul>';
  if (req.cookies.key) {
    for (let key in req.session.things){
      output +=`<li>Key : ${key} Value: ${req.session.things[key]}</li>`;
    }
    output += '</ul>' +'Click to <a href="/forget">forget</a>!.'
    res.send(output);
  } else {
    for (let key in req.session.things){
      output +=`<li>Key : ${key} Value: ${req.session.things[key]}</li>`;
    }
    output += '</ul>';
    output += '<form method="post">Key<input name = "key"> Value<input name = "value">'
    + '<input type="submit" value="Submit"/></form>'
    res.send(output);
  }
});

app.get('/forget', (req, res)=>{
  res.clearCookie('key');
  res.redirect('back');
});

app.post('/', (req, res)=>{
 
    req.session.things[req.body.key] = req.body.value;
    console.log(req.session.things);
   // var minute = 60000;
  //if (req.body.key) res.cookie(key, value);
  res.redirect('back');
});


  app.listen(3000);
  console.log('Express started on port 3000');


