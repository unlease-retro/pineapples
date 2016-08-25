const Pineapple = require('./service')
const Payment = require('../shared/services/payment/payment')
const ClusterService = require('../cluster/service')
const SettingsService = require('../settings/service')
exports.create = (req, res, next) => {
  
  let pineapple = Pineapple.getPineappleFromReq(req.body)

  return Pineapple.validate(pineapple)
    .then(
      ()=>{

        console.log('resolve validate')
        return Payment.createCharge(req.body)

      }, () => {

        console.log('reject validate')
        next(new Error('Unable to process your order'))

      }
    )
    .then(
      charge => {

        if (charge) {

          console.log('resolve payment')
          pineapple.stripeChargeId = charge.id
          return Pineapple.create(pineapple)

        }

      }, () => {

        console.log('reject payment')
        next(new Error('Unable to process your payment'))

      }

    )
    .then(
      pineapple => {

        if (pineapple) {

          console.log('resolve create')

          res.json({ pineapple })
          res.sendStatus(200)
          return next()

        }


      }, () => {

        console.log('reject create')
        Payment.refundCharges(pineapple.stripeChargeId)
        next(new Error('Unable to process your order'))

      }
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

exports.checkDailyLimit = (req, res, next) => {

  return ClusterService.findAllPineapplesInClusters().then(Pineapple.getTotalNumPineappleNotInDelivery).then(SettingsService.isDailyLimitReached).then(

    (isLimitReached) => {
      
      if (isLimitReached) {

        next(new Error('We have reached daily limit'))

      } else
        return next()
      
    }, () => next(new Error('Unable to your process order'))

  )

}
