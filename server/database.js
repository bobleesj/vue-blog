const mongoose = require('mongoose')
mongoose.Promise = global.Promise

exports.connectDatabase = (url) => {
  mongoose.connect(url, { useMongoClient: true })
  // CONNECTION EVENTS

  // When successfully connected
  mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + url)
  })

  // If the connection throws an error
  mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err)
  })

  // When the connection is disconnected
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected')
  })

  // When the connection is open
  mongoose.connection.on('open', function () {
    console.log('Mongoose default connection is open')
  })

  // If the Node process ends, close the Mongoose connection
  process.on('SIGINT', function() {
    mongoose.connection.close(function () {
      console.log('Mongoose default connection disconnected through app termination')
      process.exit(0)
    })
  })
}
