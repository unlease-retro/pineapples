const express = require('express')
const router = express.Router()
const nestedRouter = express.Router({ mergeParams: true })
const passwordless = require('passwordless')

const controller = require('./controller')

nestedRouter.put('/', passwordless.restricted(), controller.update, (req, res, next) => next() )
nestedRouter.put('/writer/:writerId', passwordless.restricted(), controller.writer, (req, res, next) => next() )

router.use( '/:id', nestedRouter )

// the routes commented out are never used, so they retain here for completness
//router.post( '/', passwordless.restricted(), controller.create, (req, res, next) => next() )
router.post( '/generate/:limit?', controller.generate, (req, res, next) => next() )
router.get( '/:id', passwordless.restricted(), controller.read, (req, res, next) => next() )
router.get( '/', passwordless.restricted(), controller.list, (req, res, next) => next() )
//router.delete( '/:id', passwordless.restricted(), controller.remove, (req, res, next) => next() )
//router.delete( '/', passwordless.restricted(), controller.removeAll, (req, res, next) => next() )

module.exports = router
