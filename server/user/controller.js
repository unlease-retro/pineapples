const uuid = require('node-uuid')
const User = require('./service')
const ClusterService = require('../cluster/service')

// TODO check manually in controller methods whether user accessing the method can CRUD user with the role
// Manager => can CRUD riders, SUPERUSER => can CRUD riders, managers, admins
// if user being modified is not a RIDER, and user modifying is not an SUPERUSER, exit

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

  const { role, id } = req.params

  return User.read(role, id)
    .then( users => ClusterService.populateRiderWithUnfinishedClusters(users) )
    .then( users => {

      res.json({ users })

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
