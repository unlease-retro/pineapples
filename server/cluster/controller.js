const Cluster = require('./service')
const Semolina = require('../shared/services/semolina')
const SettingsService = require('../settings/service')
const EmailService = require('../shared/services/email')
const { RIDER } = require('../shared/constants').ROLES
const config = require('../shared/config')

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
    .then( () => {

      exports.list(req, res, next)

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


const ridersEqual = (clusterBefore, clusterAfter) => {

  if (!clusterBefore.rider && clusterAfter.rider)
    return false

  if (clusterBefore.rider && !clusterAfter.rider)
    return false

  if (!clusterBefore.rider && !clusterAfter.rider)
    return true

  if (clusterBefore.rider && clusterAfter.rider)
    return clusterBefore.rider._id.toString() === clusterAfter.rider._id.toString()

}
const deliverableEqual = (clusterBefore, clusterAfter) => clusterAfter.deliverable === clusterBefore.deliverable

// Notify rider when assigned to cluster and cluster is deliverable (email template 1)
// Notify rider when unassigned from cluster and cluster is deliverable (email template 2)
// Notify rider when cluster assigned to is made deliverable (email template 1)
// Notify rider when cluster assigned cluster is made undeliverable (email template 2)
const sendNotificationEmailsIfNeeded = (clusterBefore, clusterAfter) => {

  const model = {
    clusterName: clusterAfter.name,
    riderName: clusterAfter.rider.firstname,
    actionUrl: config.get('host'),
    timestamp : Date.now()
  }

  if (!ridersEqual(clusterBefore, clusterAfter) && clusterAfter.deliverable) {

    if (!clusterBefore.rider && clusterAfter.rider) {

      EmailService.sendToRiderAfterAssignment(clusterAfter.rider.email, model)

    }
    else if (clusterBefore.rider && clusterAfter.rider) {

      EmailService.sendToRiderAfterAssignment(clusterAfter.rider.email, model)
      EmailService.sendToRiderAfterUnassignment(clusterBefore.rider.email, model)

    }
    else if (clusterBefore.rider && !clusterAfter.rider) {

      // This brach is never executed, because on the frontend side is not possible to unassign a cluster
      EmailService.sendToRiderAfterUnassignment(clusterBefore.rider.email, model)

    }

  }

  if (!deliverableEqual(clusterBefore, clusterAfter)) {

    EmailService.sendToRiderAfterUnassignment(clusterBefore.rider.email,  {

      clusterName: clusterBefore.name,
      riderName: clusterBefore.rider.firstname,
      actionUrl: config.get('host'),
      timestamp : Date.now()


    })

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