const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const routes = require('./routes')

// database
const database = require('./db')

// setup express
const app = express()
const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 8000

// serve static assets
app.use(express.static(path.join(__dirname, '../public')))

// favicon
app.use(favicon(path.join(__dirname, '../public/favicon.png')))

// views
app.set('views', path.join(__dirname, 'shared/views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// routes
app.use('/', routes)

// error handling
app.use( (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// server
const server = app.listen(PORT, HOST, () => {

    const host = server.address().address
    const port = server.address().port

    console.log(`🍍  Server running at http://${host}:${port}`)

})
