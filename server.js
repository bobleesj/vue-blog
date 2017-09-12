const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

// Create server instance
app = express()

// Register middlewares
app.use(serveStatic(__dirname + "/dist"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

// Create API
app.get('/api/auth/login', function (req, res) {
  res.send('Hello World from Bob!')
})

app.get('/api/auth/signup', function (req, res) {
  res.send(`You are trying to sign up bro!`)
})

var port = process.env.PORT || 5000

app.listen(port)
console.log('server started '+ port)
