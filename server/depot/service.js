const Depot = require('./model')

exports.create = (_id, props) => {

  return Depot.create(Object.assign({}, _id, props))

}

exports.read = _id => {

  return Depot.findOne({ _id })

}

exports.list = () => {

  return Depot.find()

}

exports.update = (_id, props) => {

  return Depot.findOneAndUpdate({ _id }, Object.assign({}, props), { new: true })

}

exports.nearestTo = ({ centroid: [lat, lng] }) => {

  const query = {
    location: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [lng, lat]
        },
      }
    },
    active: true
  }

  return Depot.findOne(query)

}
