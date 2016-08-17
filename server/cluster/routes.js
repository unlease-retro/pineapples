const express = require('express')
const router = express.Router()
const nestedRouter = express.Router({ mergeParams: true })

const controller = require('./controller')

nestedRouter.put('/', controller.update, (req, res, next) => next() )
nestedRouter.put('/writer/:writerId', controller.writer, (req, res, next) => next() )

router.use( '/:id', nestedRouter )

router.post( '/', controller.create, (req, res, next) => next() )
router.post( '/generate/:limit?', controller.generate, (req, res, next) => next() )
router.get( '/:id', controller.read, (req, res, next) => next() )
router.get( '/', controller.list, (req, res, next) => next() )
router.delete( '/:id', controller.remove, (req, res, next) => next() )
router.delete( '/', controller.removeAll, (req, res, next) => next() )

module.exports = router
