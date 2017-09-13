// Import npm modules
const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const history = require('connect-history-api-fallback');

// Create root instance
app = express()
app.use(history())

// inject middlewares
app.use(serveStatic(__dirname + "/dist"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/json'}))
app.use(morgan('dev'))
app.use(cookieParser())

// Run App
const port = process.env.PORT || 5000
app.listen(port)
console.log('server started '+ port)

module.exports = app
