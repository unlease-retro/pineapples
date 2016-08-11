const express = require('express')

// TODO - API routes `api/`

const router = express.Router()

router.get('/', (req, res, next) => {

  res.render('')

  next()

})

module.exports = router
