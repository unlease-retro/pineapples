const Model = require('./model')

exports.create = ( subscription) => {

  return Model.create(Object.assign({}, subscription))

}