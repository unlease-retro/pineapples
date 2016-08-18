const express = require('express')
const router = express.Router()

// domains
const Cluster = require('./cluster')
const Depot = require('./depot')
const Pineapple = require('./pineapple')
const Settings = require('./settings')
const User = require('./user')
const Writer = require('./writer')
const Auth = require('./auth')

// app
router.get('/', (req, res, next) => {

  res.render('')

  next()

})

// API
router.use(`/api/${Cluster.name}`, Cluster.routes)
router.use(`/api/${Depot.name}`, Depot.routes)
router.use(`/api/${Pineapple.name}`, Pineapple.routes)
router.use(`/api/${Settings.name}`, Settings.routes)
router.use(`/api/${User.name}`, User.routes)
router.use(`/api/${Writer.name}`, Writer.routes)
router.use(`/api/${Auth.name}`, Auth.routes)


module.exports = router
