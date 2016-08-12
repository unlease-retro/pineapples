const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.post( '/', controller.create, (req, res, next) => next() )
router.get( '/:id', controller.read, (req, res, next) => next() )
router.put( '/:id', controller.update, (req, res, next) => next() )

module.exports = router
