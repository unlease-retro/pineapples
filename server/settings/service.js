const Settings = require('./model')

exports.read = () => {

  return Settings.find({}).lean()

}

exports.update = props => {

  return Settings.findOneAndUpdate({}, Object.assign({}, props), { new: true })

}
