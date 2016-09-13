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
const Archive = require('./archive')
const Discount = require('./discount')
const Subscription = require('./subscription')

// API
router.use(`/${Cluster.name}`, Cluster.routes)
router.use(`/${Depot.name}`, Depot.routes)
router.use(`/${Pineapple.name}`, Pineapple.routes)
router.use(`/${Settings.name}`, Settings.routes)
router.use(`/${User.name}`, User.routes)
router.use(`/${Writer.name}`, Writer.routes)
router.use(`/${Auth.name}`, Auth.routes)
router.use(`/${Archive.name}`, Archive.routes)
router.use(`/${Discount.name}`, Discount.routes)
router.use(`/${Subscription.name}`, Subscription.routes)

module.exports = router
