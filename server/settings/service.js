const Settings = require('./model')

exports.list = () => {

  return Settings.find({})

}

exports.update = (id, props) => {

  return Settings.findOneAndUpdate({ id }, Object.assign({}, props), { new: true })

}
