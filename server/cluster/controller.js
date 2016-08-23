const Cluster = require('./service')
const Semolina = require('../shared/services/semolina')
const SettingsService = require('../settings/service')
const { RIDER } = require('../shared/constants').ROLES

exports.create = (req, res, next) => {

  return Cluster.create(req.body)
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

exports.removeAll = (req, res, next) => {

  return Cluster.removeAll()
    .then( () => {

      res.sendStatus(200)

      return next()

    }, e => next(e) )

}

exports.generate = (req, res, next) => {

  return SettingsService.read()
    .then( ( [{dailyLimit}] ) => {

      const limit = req.params.limit || dailyLimit

      return Semolina(limit)

    })
    .then( clusters => {

      res.json({clusters})

      return next()

    }, e => next(e) )

}

exports.list = (req, res, next) => {

  let { user, body: filter } = req

  const { _id, role } = JSON.parse(user)

  // if Rider is looking up his clusters, show only his clusters
  if (role === RIDER) {

    filter = Object.assign({}, filter, { rider: _id })

  }

  return Cluster.list(filter)
    .then( clusters => {

      res.json({ clusters })

      return next()

    }, e => next(e) )

}

exports.writer = (req, res, next) => {

  const { id, writerId } = req.params

  return Cluster.writer(id, writerId)
    .then( email => {

      res.json({ email })

      return next()

    }, e => next(e) )

}
