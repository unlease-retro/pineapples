const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.get( '/', controller.read, (req, res, next) => next() )
router.put( '/', controller.update, (req, res, next) => next() )

module.exports = router
