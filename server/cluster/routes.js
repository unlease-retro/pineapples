const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.post( '/', controller.create, (req, res, next) => next() )
router.post( '/generate/:limit?', controller.generate, (req, res, next) => next() )
router.get( '/:id', controller.read, (req, res, next) => next() )
router.get( '/', controller.list, (req, res, next) => next() )
router.put( '/:id', controller.update, (req, res, next) => next() )
router.delete( '/:id', controller.remove, (req, res, next) => next() )
router.delete( '/', controller.removeAll, (req, res, next) => next() )

module.exports = router
