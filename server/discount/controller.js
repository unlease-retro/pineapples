const discountService = require('./service')



exports.read = (req, res, next) => {

  const code = req.params.code.toUpperCase()

  return discountService.read(code)
    .then( discount => {

      res.json({ discount })

      return next()

    }, e => next(e) )

}


