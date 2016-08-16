const Settings = require('./service')

exports.read = (req, res, next) => {

  return Settings.read()
    .then( ([ settings ]) => {

      res.json({ settings })

      return next()

    }, e => next(e) )

}

exports.update = (req, res, next) => {

  return Settings.update(req.body)
    .then( settings => {

      res.json({ settings })

      return next()

    }, e => next(e) )

}
