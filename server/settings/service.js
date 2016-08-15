const Settings = require('./model')

exports.read = (id) => {

  return Settings.findOne({ id })

}

exports.update = (id, props) => {

  return Settings.findOneAndUpdate({ id }, Object.assign({}, props), { new: true })

}
