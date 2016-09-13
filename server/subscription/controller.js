const Service = require('./service')


exports.create = (req, res, next) => {

  return Service.create(req.body).then( () => {

    res.sendStatus(200)

    return next()

  }, e => next(e) )

}
