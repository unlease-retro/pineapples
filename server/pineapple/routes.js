const express = require('express')
const router = express.Router()
const passwordless = require('passwordless')

const controller = require('./controller')

const { RIDER } = require('../shared/constants').ROLES

const { restrictFor } = require('../auth/middleware')

router.get( '/getDailyLimitStatus', controller.getDailyLimitStatus, (req, res, next) => next() )
router.post( '/', controller.checkDailyLimit, controller.create, (req, res, next) => next() )
router.post( '/withoutPayment', controller.checkDailyLimit, controller.createWithoutPayment, (req, res, next) => next() )
router.get( '/list/stats', passwordless.restricted(), restrictFor(RIDER), controller.ordersNotInClustersAndNotDelivered, (req, res, next) => next() )
router.get( '/:id', controller.read, (req, res, next) => next() )
router.get( '/', passwordless.restricted(), restrictFor(RIDER), controller.list, (req, res, next) => next() )
router.get( '/track/:id', controller.track, (req, res, next) => next() )
router.put( '/:id', passwordless.restricted(), controller.update, (req, res, next) => next() )

module.exports = router
