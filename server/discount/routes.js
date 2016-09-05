const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.get( '/validate/:code', controller.read, (req, res, next) => next() )

module.exports = router
