// Import npm modules
const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

// Import routers
const auth = require('./server/routers/auth-router')
const database = require('./server/database')

// Create root instance
app = express()

// inject middlewares
app.use(serveStatic(__dirname + "/dist"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/json'}))
app.use(morgan('dev'))
app.use(cookieParser())

// Inject API routers
app.use('/api/auth', auth)

// Run
const port = process.env.PORT || 5000
app.listen(port)
console.log('server started '+ port)

// Change database based on mode
if (app.get('env') === 'development' ) {
  database.connectDatabase("mongodb://localhost:27017")
} else {
  database.connectDatabase("mongodb://localhost:27017")
}


module.exports = app
