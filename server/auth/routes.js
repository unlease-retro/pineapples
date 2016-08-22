const express = require('express')
const router = express.Router()
const controller = require('./controller')
const passwordless = require('passwordless')

router.get( '/whoami', controller.read, (req, res, next) => next() )
router.post('/sendtoken', passwordless.requestToken(controller.create), (req, res, next) => next() )

module.exports = router
