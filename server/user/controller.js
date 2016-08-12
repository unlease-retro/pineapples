const uuid = require('node-uuid')
const User = require('./service')

exports.create = (req, res, next) => {

  const id = uuid.v4()

  return User.create(id, req.body)
    .then( user => {

      res.json({ user })

      res.sendStatus(200)

      return next()

    }, e => next(e) )

}

exports.read = (req, res, next) => {

  const id = req.params.id

  return User.read(id)
    .then( user => {

      res.json({ user })

      return next()

    }, e => next(e) )

}

exports.update = (req, res, next) => {

  const id = req.params.id

  return User.update(id, req.body)
    .then( user => {

      res.json({ user })

      return next()

    }, e => next(e) )

}

exports.remove = (req, res, next) => {

  const id = req.params.id

  return User.remove(id)
    .then( () => {

      res.sendStatus(200)

      return next()

    }, e => next(e) )

}
