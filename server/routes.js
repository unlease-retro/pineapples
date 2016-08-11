const express = require('express')
const router = express.Router()

// domains
const Pineapple = require('./pineapple')

// app
router.get('/', (req, res, next) => {

  res.render('')

  next()

})

// API
router.use(`api/${Pineapple.name}`, Pineapple.routes)

module.exports = router
