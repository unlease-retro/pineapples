const Pineapple = require('./model')
const geohash = require('ngeohash')

exports.create = ( props) => {

  let pineapple = {

    streetAddress : props.data.streetAddress,
    city : props.data.city,
    country : props.data.country,
    postcode : props.data.postcode,
    from : props.data.senderName,
    to : props.data.friendName,
    senderEmail : props.data.senderEmail,
    geohash: geohash.encode(props.data.geocode.lat, props.data.geocode.lng),
    location: {
      
      type: 'Point',
      coordinates: [props.data.geocode.lng, props.data.geocode.lat]
      
    }

  }

  return Pineapple.create(Object.assign({}, pineapple))
  
  

}

exports.read = _id => {

  return Pineapple.findOne({ _id })

}

exports.update = (_id, props) => {

  return Pineapple.findOneAndUpdate({ _id }, Object.assign({}, props), { new: true })

}

exports.list = (filter = {}, limit = 0) => {

  return Pineapple.find(filter).limit(limit).sort({createdAt: 'asc'})

}

exports.track = trackingId => {

  return Pineapple.findOne({ _id: trackingId })

}
