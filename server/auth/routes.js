const express = require('express')
const router = express.Router()
const controller = require('./controller')
const passwordless = require('passwordless')

router.get( '/whoami', passwordless.restricted(), controller.read, (req, res, next) => next() )
router.post('/sendtoken', passwordless.requestToken(controller.create), controller.success)

module.exports = router
