const Settings = require('./service')
const config = require('../shared/config')
exports.read = (req, res, next) => {

  return Settings.read()
    .then( ([ settings ]) => {
      
      settings.stripePubKey = config.get('payment').stripe.pubKey
      res.json( { settings } )

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
