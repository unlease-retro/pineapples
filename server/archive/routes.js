const express = require('express')
const router = express.Router()
const passwordless = require('passwordless')

const controller = require('./controller')

// router.post( '/', passwordless.restricted(), controller.create, (req, res, next) => next() )
router.get( '/:id?', passwordless.restricted(), controller.read, (req, res, next) => next() )

module.exports = router
