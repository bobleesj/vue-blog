const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
// Create server instance
app = express()

// Register middlewares
app.use(serveStatic(__dirname + "/dist"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));
app.use(morgan('dev'))
app.use(cookieParser());


// Create API
app.post('/api/auth/login', function (req, res) {
  res.send('Hello World from Bob!')
})

app.get('/api/auth/signup', function (req, res) {
  res.send(`You are trying to sign up bro!`)
})

const api = require('./server/routers/auth-router');
app.use('/api', api);

var port = process.env.PORT || 5000

app.listen(port)
console.log('server started '+ port)

console.log(app.get('env'));
if ( app.get('env') === 'development' ) {
  console.log('Running on development mode');
} else {
  console.log('Running on production mode');
}




const url = 'mongodb://localhost:27017';

mongoose.Promise = global.Promise;
mongoose.connect(url, { useMongoClient: true })
// CONNECTION EVENTS

// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + url);
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// When the connection is open
mongoose.connection.on('open', function () {
  console.log('Mongoose default connection is open');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
