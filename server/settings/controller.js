const uuid = require('node-uuid')
const Settings = require('./service')

exports.read = (req, res, next) => {

  const id = req.params.id

  return Settings.read(id)
    .then( depot => {

      res.json({ depot })

      return next()

    }, e => next(e) )

}

exports.update = (req, res, next) => {

  const id = req.params.id

  return Settings.update(id, req.body)
    .then( depot => {

      res.json({ depot })

      return next()

    }, e => next(e) )

}
