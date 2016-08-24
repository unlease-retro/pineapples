const Pineapple = require('./service')
const Payment = require('../shared/services/payment/payment')
exports.create = (req, res, next) => {
  
  let pineapple = Pineapple.getPineappleFromReq(req.body)

  return Pineapple.validate(pineapple)
    .then(
      ()=>{

        Payment.createCharge(req.body)
          .then(charge => {

            pineapple.stripeChargeId = charge.id
            Pineapple.create(pineapple)
              .then( pineapple => {

                res.json({ pineapple })

                res.sendStatus(200)

                return next()

              }, () => {

                Payment.refundCharges(charge.id)
                next(new Error('Unable to process your order'))

              })

          }, () => next(new Error('Unable to process your payment')) )

      }, () => next(new Error('Unable to process your order'))

    )

}

exports.read = (req, res, next) => {

  const id = req.params.id

  return Pineapple.read(id)
    .then( pineapple => {

      res.json({ pineapple })

      return next()

    }, e => next(e) )

}

exports.update = (req, res, next) => {

  const id = req.params.id

  return Pineapple.update(id, req.body)
    .then( pineapple => {

      res.json({ pineapple })

      return next()

    }, e => next(e) )

}

exports.list = (req, res, next) => {

  const { filter } = req.body

  return Pineapple.list(filter)
    .then( pineapples => {

      res.json({ pineapples })

      return next()

    }, e => next(e) )

}

exports.track = (req, res, next) => {

  const id = req.params.id

  return Pineapple.track(id)
    .then( pineapple => {

      res.json({ pineapple })

      return next()

    }, () => next(new Error('tracking id not found')) )

}
