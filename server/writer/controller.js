const uuid = require('node-uuid')
const Writer = require('./service')

exports.create = (req, res, next) => {

  const id = uuid.v4()

  return Writer.create(id, req.body)
    .then( writer => {

      res.json({ writer })

      res.sendStatus(200)

      return next()

    }, e => next(e) )

}

exports.read = (req, res, next) => {

  const id = req.params.id

  return Writer.read(id)
    .then( writer => {

      res.json({ writer })

      return next()

    }, e => next(e) )

}

exports.update = (req, res, next) => {

  const id = req.params.id

  return Writer.update(id, req.body)
    .then( writer => {

      res.json({ writer })

      return next()

    }, e => next(e) )

}

exports.remove = (req, res, next) => {

  const id = req.params.id

  return Writer.remove(id)
    .then( () => {

      res.sendStatus(200)

      return next()

    }, e => next(e) )

}

exports.list = (req, res, next) => {

  return Writer.list()
    .then( writers => {

      res.json({ writers })

      return next()

    }, e => next(e) )

}
