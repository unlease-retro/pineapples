const uuid = require('node-uuid')
const Pineapple = require('./service')

exports.create = (req, res, next) => {

  const id = uuid.v4()

  return Pineapple.create(id, req.body)
    .then( pineapple => {

      res.json({ pineapple })

      res.sendStatus(200)

      return next()

    }, e => next(e) )

}

exports.read = (req, res, next) => {

  const id = req.params.id

  return Pineapple.read(id)
    .then( pineapple => {

      res.json({ pineapple })

      return next()

    }, e => next(e) )

}

exports.update = (req, res, next) => {

  const id = req.params.id

  return Pineapple.update(id, req.body)
    .then( pineapple => {

      res.json({ pineapple })

      return next()

    }, e => next(e) )

}

exports.list = (req, res, next) => {

  const { filter } = req.body

  return Pineapple.list(filter)
    .then( pineapples => {

      res.json({ pineapples })

      return next()

    }, e => next(e) )

}

exports.track = (req, res, next) => {

  const id = req.params.id

  return Pineapple.track(id)
    .then( pineapple => {

      res.json({ pineapple })

      return next()

    }, e => next(e) )

}
