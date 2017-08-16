const express = require('express');
const app = express();
app.use(express.static('public'));
const mustacheExpress = require('mustache-express');
app.engine('mustache',mustacheExpress());

app.set('views', './views');
app.set('view engine', 'mustache');

const data = require( src = '/Users/Chris/Desktop/TheIronYard/BackEnd/Week5/2Tuesday/Daily/views/robots.js');
const robots = data.users;
console.log(robots[0]);

app.get('/robots', function (req, res){
  res.render('index',{things:robots})
})

app.get('/', function (req, res){
  res.send('Hello World!');
});


app.listen(3000, function(){
  console.log('Web app running');
});
