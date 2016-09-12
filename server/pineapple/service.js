const Pineapple = require('./model')
const geohash = require('ngeohash')
const EmailService = require('../shared/services/email')
const config = require('../shared/config/index')

exports.validate = ( pineapple ) => {

  let doc = Pineapple( pineapple )

  return doc.validate()

}

exports.getPineappleFromReq = ( props ) => {

  return {

    streetAddress : props.data.streetAddress,
    city : props.data.city,
    country : props.data.country,
    postcode : props.data.postcode,
    from : props.data.senderName,
    to : props.data.friendName,
    senderEmail : props.data.senderEmail,
    geohash : geohash.encode(props.data.geocode.lat, props.data.geocode.lng),
    companyName : props.data.companyName,
    message : props.data.message,
    discountCode : props.data.discountCode,
    location: {

      type: 'Point',
      coordinates: [props.data.geocode.lng, props.data.geocode.lat]

    }

  }

}

exports.create = ( pineapple) => {

  return Pineapple.create(Object.assign({}, pineapple))

}

exports.read = _id => {

  return Pineapple.findOne({ _id })

}

exports.update = (_id, props) => {

  return Pineapple.findOneAndUpdate({ _id }, Object.assign({}, props), { new: true })

}

exports.list = (filter = {}, limit = 0, skip = 0, sortBy = 'createdAt', sortDirection = 'asc') => {

  const list = {}

  return Pineapple.find(filter).skip(skip).limit(limit).sort({[sortBy]: sortDirection})
  .then((pineapples) => {

    list.pineapples = pineapples
    return Pineapple.count(filter)

  })
  .then((count) => {

    list.count = count
    return list

  })

}

exports.track = trackingId => {

  return Pineapple.findOne({ _id: trackingId })

}

exports.getTotalNumPineappleNotInDelivery = (pineapplesInCluster) => {

  // not in delivery = not in a cluster, not already delivered and possible to deliver
  return Pineapple.count( { _id: { '$nin': pineapplesInCluster }, delivered: false, deliverable: true } )

}

exports.getTotalNumPineappleInDeliveryButNotDelivered = (pineapplesInCluster) => {

  return Pineapple.count( { _id: { '$in': pineapplesInCluster }, delivered: false } )

}

exports.getTotalNumPineappleUsingDiscountCode = (code) => {

  return Pineapple.count( {

    discountCode : code

  } )

}

exports.sendTrackingEmail = pineapple => {

  let actionUrl = `${config.get('pineapplePageUrl')}?trackingId=${pineapple._id.toString()}`
  return EmailService.sendToCustomerAfterOrder(pineapple.senderEmail, {

    actionUrl : actionUrl,
    timestamp : Date.now()

  })

}

exports.updateMultiple = (pineapplesIds, props) => {

  return Pineapple.update({ _id: { '$in': pineapplesIds } }, props, { multi: true }).exec()

}
