const express = require('express')
const router = express.Router()
const passwordless = require('passwordless')

const controller = require('./controller')

const { MANAGER, RIDER } = require('../shared/constants').ROLES
const { restrictFor, inhibit } = require('../auth/middleware')

router.post( '/', passwordless.restricted(), restrictFor(RIDER), inhibit(MANAGER).toDealOnlyWith(RIDER), controller.create, (req, res, next) => next() )
router.get( '/:role/:id?', passwordless.restricted(), controller.read, (req, res, next) => next() )
router.put( '/:id', passwordless.restricted(), restrictFor(RIDER), inhibit(MANAGER).toDealOnlyWith(RIDER), controller.update, (req, res, next) => next() )
router.delete( '/:id', passwordless.restricted(), restrictFor(RIDER), inhibit(MANAGER).toDealOnlyWith(RIDER), controller.remove, (req, res, next) => next() )

module.exports = router
