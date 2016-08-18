const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const favicon = require('serve-favicon')
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

// serve static assets
app.use(express.static(path.join(__dirname, '../public')))

// favicon
app.use(favicon(path.join(__dirname, '../public/favicon.ico')))

// views
app.set('views', path.join(__dirname, 'shared/views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// passwordless
app.use(expressSession({ secret: '42', saveUninitialized: false, resave: false, store: redisStore }))
passwordless(app)

// cors
app.use(cors({ origin: config.get('origins') }))

// routes
app.use('/', routes)

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

  console.log(`🍍  Server running at http://${host}:${port}`)

})
