const chalk = require('chalk')
const fs = require('fs')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const fallback = require('express-history-api-fallback')
const passwordless = require('./shared/util/passwordless')
const expressSession = require('express-session')
const RedisStore = require('connect-redis')(expressSession)

const config = require('./shared/config')
const routes = require('./routes')
const { HOST, PORT } = require('./shared/constants')

// database
require('./db')

// setup redis
const redisStore = new RedisStore({
  host: config.get('redis').host,
  port: config.get('redis').port
})

// setup express
const app = express()

// env
const isDevelopment = process.env.NODE_ENV === 'development'

// logger
if (isDevelopment) {

  const serverLogStream = fs.createWriteStream(path.join(__dirname, '../server.log'), {flags: 'a'})

  app.use(morgan('tiny', { stream: serverLogStream }))

}

// construct static assets path
const staticPath = isDevelopment ? path.join(__dirname, '../public') : './public'

// parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// passwordless
app.use(expressSession({ secret: '42', saveUninitialized: false, resave: false, store: redisStore }))
passwordless(app)

// cors
app.use(cors())

// serve static assets
app.use(express.static(staticPath))

// API routes
app.use('/api', routes)
app.use(/^(?!\/api).*$/, require('passwordless').restricted({ failureRedirect: 'login.html' }), fallback('app.html', { root: staticPath }))

/* eslint-disable no-unused-vars */
// error handling
app.use( (err, req, res, next) => {

  console.error(err.stack)
  res.status(500).send(err.message)

})
/* eslint-enable no-unused-vars */

// server
const server = app.listen(PORT, HOST, () => {

  const host = server.address().address
  const port = server.address().port

  console.log('🍍  running at:\n')
  console.log('  ' + chalk.cyan(`http://${host}:${port}\n`))

  // notifier in development
  if (isDevelopment) require('node-notifier').notify({ 'title': 'Pineapples 🍍', 'message': 'Server up!', icon: path.join(__dirname, '../static/android-chrome-192x192.png'), sound: 'Submarine' })

})
