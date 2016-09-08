const discountService = require('./service')
const pineappleSercive = require('../pineapple/service')


exports.read = (req, res, next) => {

  const code = req.params.code.toUpperCase()

  return pineappleSercive.getTotalNumPineappleUsingDiscountCode(code)
    .then(count => {

      discountService.read(code).then( discount => {

        if (discount.active)
          discount.active = count < discount.maxUsage
        
        res.json({ discount })

        return next()

      }, e => next(e) )

    }
  )

}


