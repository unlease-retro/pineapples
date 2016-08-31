const Cluster = require('./service')
const Semolina = require('../shared/services/semolina')
const SettingsService = require('../settings/service')
const EmailService = require('../shared/services/email')
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

  let { user, query: deliverable } = req

  const { _id, role } = JSON.parse(user)

  let filter = deliverable

  // if Rider is looking up clusters, show only his clusters
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

const sendNotificationEmailsIfNeeded = (clusterBefore, clusterAfter) => {

  if (clusterBefore && (typeof clusterBefore) !== 'object')
    clusterBefore = {_id: clusterBefore}
  if (clusterAfter && (typeof clusterAfter) !== 'object')
    clusterAfter = {_id: clusterAfter}

  // Notify rider when assigned to cluster and cluster is deliverable (email template 1)
  // Notify rider when unassigned from cluster and cluster is deliverable (email template 2)
  // Notify rider when cluster assigned to is made deliverable (email template 1)
  // Notify rider when cluster assigned cluster is made undeliverable (email template 2)

  if (clusterBefore.rider._id !== clusterAfter.rider._id && clusterAfter.deliverable) {

    if ((typeof clusterBefore.rider._id === 'undefined') && (typeof clusterAfter.rider._id !== 'undefined')) {

      EmailService.sendToRiderAfterAssignment(clusterAfter.rider.email, {})

    }
    else if ((typeof clusterBefore.rider._id !== 'undefined') && (typeof clusterAfter.rider._id !== 'undefined')) {

      EmailService.sendToRiderAfterAssignment(clusterAfter.rider.email, {})
      EmailService.sendToRiderAfterUnassignment(clusterBefore.rider.email, {})

    }
    else if ((typeof clusterBefore.rider._id !== 'undefined') && (typeof clusterAfter.rider._id === 'undefined')) {

      // This brach is never executed, because on the frontend side is not possible to unassign a cluster
      EmailService.sendToRiderAfterUnassignment(clusterBefore.rider.email, {})

    }

  }

  if (clusterAfter.deliverable !== clusterBefore.deliverable && clusterBefore.rider._id === clusterAfter.rider._id) {

    if (clusterAfter.deliverable)
      EmailService.sendToRiderAfterAssignment(clusterAfter.rider.email, {})
    else
      EmailService.sendToRiderAfterUnassignment(clusterAfter.rider.email, {})

  }

}

exports.decoratedUpdate = () => {

  return (req, res, next) => {

    const clusterId = req.params.id
    let clusterBefore = {}

    // find
    Cluster.read(clusterId)
      .then(cluster => clusterBefore = cluster)
      .then(() =>
        exports.update(req, res, next)
          .then(() =>
            // check response
            Cluster.read(clusterId)
            .then(cluster => sendNotificationEmailsIfNeeded(clusterBefore, cluster))
          )
      )

  }

}