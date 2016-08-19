const express = require('express')
const router = express.Router()
const passwordless = require('passwordless')

const controller = require('./controller')

const { SUPERUSER } = require('../shared/constants').ROLES
const { allowOnlyFor } = require('../auth/middleware')

router.post( '/', passwordless.restricted(), allowOnlyFor(SUPERUSER), controller.create, (req, res, next) => next() )
//router.get( '/:id', passwordless.restricted(), controller.read, (req, res, next) => next() )
router.put( '/:id', passwordless.restricted(), allowOnlyFor(SUPERUSER), controller.update, (req, res, next) => next() )

module.exports = router
