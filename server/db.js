const chalk = require('chalk')
const mongoose = require('mongoose')
const config = require('./shared/config')

const MONGO_HOST = process.env.MONGO_URL || config.get('db').uri

mongoose.connect(MONGO_HOST, {
  server: { poolSize: 5 },
  db: { native_parser: true },
  config: { autoIndex: false }
})

// use native promises
mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {

  console.log(chalk.green('[mongodb] connected\n'))

})
