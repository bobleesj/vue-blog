const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + "/dist"));

app.get('/api/auth/login', function (req, res) {
  res.send('Hello World from Bob!')
})

app.get('/api/auth/signup', function (req, res) {
  res.send(`You are trying to sign up bro!`)
})


var port = process.env.PORT || 5000;

app.listen(port);
console.log('server started '+ port);
