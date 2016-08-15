const Depot = require('./model')

exports.create = (id, props) => {

  return Depot.create(Object.assign({}, id, props))

}

exports.read = (id) => {

  return Depot.findOne({ id })

}

exports.update = (id, props) => {

  return Depot.findOneAndUpdate({ id }, Object.assign({}, props), { new: true })

}

exports.nearestTo = ({ centroid: [lat, lng] }) => {

  const query = {
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [lng, lat]
        },
      }
    },
    active: true
  }

  return Depot.findOne(query)

}