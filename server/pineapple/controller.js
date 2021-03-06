const Pineapple = require('./service')
const Payment = require('../shared/services/payment/payment')
const ClusterService = require('../cluster/service')
const SettingsService = require('../settings/service')
const {ERROR} = require('../shared/constants')
const { mapPageToSkipAndLimit } = require('../shared/util/pagination')
const { objectWithStrippedProps, constructFilterWithDateRange } = require('../shared/util/misc')

exports.create = (req, res, next) => {

  let pineapple = Pineapple.getPineappleFromReq(req.body)

  return Pineapple.validate(pineapple)
    .then(
      ()=>{

        return Payment.createCharge(req.body)

      }, (e) => {

        console.log('reject validate for : ')
        console.log(pineapple)
        console.log(e)
        next(new Error(ERROR.GENERAL_ORDER_FAILED))

      }
    )
    .then(
      charge => {

        if (charge) {

          pineapple.stripeChargeId = charge.id
          return Pineapple.create(pineapple)

        }

      }, (e) => {

        console.log('reject payment for : ')
        console.log(pineapple)
        console.log(e)
        next(new Error(ERROR.PAYMENT_FAILED))

      }

    )
    .then(
      pineapple => {

        if (pineapple) {

          Pineapple.sendTrackingEmail(pineapple)
          res.json({ pineapple })
          res.sendStatus(200)
          return next()

        }


      }, (e) => {

        console.log('reject create for : ')
        console.log(pineapple)
        console.log(e)
        Payment.refundCharges(pineapple.stripeChargeId)
        next(new Error(ERROR.GENERAL_ORDER_FAILED))

      }
    )

}

exports.createWithoutPayment = (req, res, next) => {

  let pineapple = Pineapple.getPineappleFromReq(req.body)

  return Pineapple.create(pineapple)
    .then(
      pineapple => {

        if (pineapple) {

          Pineapple.sendTrackingEmail(pineapple)
          res.json({ pineapple })
          res.sendStatus(200)
          return next()

        }


      }, (e) => {

        console.log('reject create for : ')
        console.log(pineapple)
        console.log(e)
        next(new Error(ERROR.GENERAL_ORDER_FAILED))

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

  return Pineapple.list()
    .then( pineapples => {

      res.json({pineapples})
      return next()
    
    })
    
}
exports.filteredList = (req, res, next) => {

  const { page, sortBy, sortDirection } = req.query

  // strip out every expected prop, and treat others as filter
  const preFilter = objectWithStrippedProps(req.query, 'page', 'sortBy', 'sortDirection')
  const filter = constructFilterWithDateRange(preFilter)

  const { skip, limit } = mapPageToSkipAndLimit(parseInt(page || 1))

  return Pineapple.filteredList(filter, limit, skip, sortBy, sortDirection && sortDirection.toLowerCase())
    .then( ({ pineapples, count: pineapplesCount }) => {

      res.json({ pineapples, pineapplesCount })

      return next()

    }, e => next(e) )

}

exports.track = (req, res, next) => {

  const id = req.params.id

  return Pineapple.track(id)
    .then( pineapple => {

      res.json({ pineapple })

      return next()

    }, () => next(new Error(ERROR.TRACKING_ID_NOT_FOUND)) )

}

exports.checkDailyLimit = (req, res, next) => {

  return ClusterService.findAllPineapplesInClusters().then(Pineapple.getTotalNumPineappleNotInDelivery).then(SettingsService.isDailyLimitReached).then(

    (isLimitReached) => {

      if (isLimitReached) {

        next(new Error(ERROR.DAILY_LIMIT_REACHED))

      } else
        return next()

    },

    (e) => {

      console.log('reject check limit : ')
      console.log(e)
      next(new Error(ERROR.GENERAL_ORDER_FAILED))

    }

  )

}

exports.ordersNotInClustersAndNotDelivered = (req, res, next) => {

  let todaysOrders = 0
  let clusteredPineapples = null

  return ClusterService.findAllPineapplesInClusters()
    .then( pineapplesInClusters => {

      clusteredPineapples = pineapplesInClusters
      return Pineapple.getTotalNumPineappleNotInDelivery(pineapplesInClusters)

    }).then( todaysOrdersCount => {

      todaysOrders = todaysOrdersCount
      return Pineapple.getTotalNumPineappleInDeliveryButNotDelivered(clusteredPineapples)

    }).then( pineapplesToBeDeliveredToday => {

      const pineapplesDeliveredToday = clusteredPineapples.length - pineapplesToBeDeliveredToday

      res.json({stats: { todaysOrders, pineapplesToBeDeliveredToday, pineapplesDeliveredToday }})
      return next()

    })

}

exports.getDailyLimitStatus = (req, res, next) => {

  return ClusterService.findAllPineapplesInClusters().then(Pineapple.getTotalNumPineappleNotInDelivery).then(SettingsService.isDailyLimitReached).then(

    (isLimitReached) => {

      res.json({ isLimitReached })
      res.sendStatus(200)
      return next()

    }, e => next(e)
  )

}

exports.getDailyLPineappleLeft = (req, res, next) => {

  return ClusterService.findAllPineapplesInClusters().then(Pineapple.getTotalNumPineappleNotInDelivery).then(SettingsService.numPineappleLeftToday).then(

    (numLeft) => {

      res.json({ numLeft })
      res.sendStatus(200)
      return next()

    }, e => next(e)
  )

}
