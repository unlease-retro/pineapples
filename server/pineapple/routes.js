const express = require('express')
const router = express.Router()
const passwordless = require('passwordless')

const controller = require('./controller')

router.post( '/', controller.create, (req, res, next) => next() )
router.get( '/:id', controller.read, (req, res, next) => next() )
router.get( '/', passwordless.restricted(), controller.list, (req, res, next) => next() )
router.get( '/track/:id', passwordless.restricted(), controller.track, (req, res, next) => next() )
router.put( '/:id', passwordless.restricted(), controller.update, (req, res, next) => next() )

module.exports = router
