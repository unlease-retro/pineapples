const uuid = require('node-uuid')
const Cluster = require('./service')
const Semolina = require('../shared/services/semolina')

exports.create = (req, res, next) => {

  const id = uuid.v4()

  return Cluster.create(id, req.body)
    .then( cluster => {

      res.json({ cluster })

      res.sendStatus(200)

      return next()

    }, e => next(e) )

}

exports.read = (req, res, next) => {

  const id = req.params.id

  return Cluster.read(id)
    .then( cluster => {

      res.json({ cluster })

      return next()

    }, e => next(e) )

}

exports.update = (req, res, next) => {

  const id = req.params.id

  return Cluster.update(id, req.body)
    .then( cluster => {

      res.json({ cluster })

      return next()

    }, e => next(e) )

}

exports.remove = (req, res, next) => {

  const id = req.params.id

  return Cluster.remove(id)
    .then( () => {

      res.sendStatus(200)

      return next()

    }, e => next(e) )

}

exports.generate = (req, res, next) => {

  return Semolina()
    .then( clusters => {

      // TODO - clusters.map( Cluster.create(id, props) )

      res.sendStatus(200)

      return next()

    }, e => next(e) )

}

exports.rider = (req, res, next) => {

  // TODO - get cluster by riderId (req.params.id)

  return true

}
