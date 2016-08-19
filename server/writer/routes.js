const express = require('express')
const router = express.Router()
const passwordless = require('passwordless')

const controller = require('./controller')

const { RIDER } = require('../shared/constants').ROLES
const { restrictFor } = require('../auth/middleware')

router.post( '/', passwordless.restricted(), restrictFor(RIDER), controller.create, (req, res, next) => next() )
router.get( '/:id', passwordless.restricted(), restrictFor(RIDER), controller.read, (req, res, next) => next() )
router.get( '/', passwordless.restricted(), restrictFor(RIDER), controller.list, (req, res, next) => next() )
router.put( '/:id', passwordless.restricted(), restrictFor(RIDER), controller.update, (req, res, next) => next() )
router.delete( '/:id', passwordless.restricted(), restrictFor(RIDER), controller.remove, (req, res, next) => next() )

module.exports = router
