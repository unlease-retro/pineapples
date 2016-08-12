const uuid = require('node-uuid')
const Settings = require('./service')

exports.read = (req, res, next) => {

  const id = req.params.id

  return Settings.read(id)
    .then( settings => {

      res.json({ settings })

      return next()

    }, e => next(e) )

}

exports.update = (req, res, next) => {

  const id = req.params.id

  return Settings.update(id, req.body)
    .then( settings => {

      res.json({ settings })

      return next()

    }, e => next(e) )

}
