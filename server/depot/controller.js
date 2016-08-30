const uuid = require('node-uuid')
const Depot = require('./service')

exports.create = (req, res, next) => {

  const id = uuid.v4()

  return Depot.create(id, req.body)
    .then( depot => {

      res.json({ depot })

      res.sendStatus(200)

      return next()

    }, e => next(e) )

}

exports.read = (req, res, next) => {

  const id = req.params.id

  return Depot.read(id)
    .then( depot => {

      res.json({ depot })

      return next()

    }, e => next(e) )

}

exports.list = (req, res, next) => {

  return Depot.list()
    .then( depots => {

      res.json({ depots })

      return next()

    }, e => next(e) )

}

exports.update = (req, res, next) => {

  const id = req.params.id

  return Depot.update(id, req.body)
    .then( depot => {

      res.json({ depot })

      return next()

    }, e => next(e) )

}
