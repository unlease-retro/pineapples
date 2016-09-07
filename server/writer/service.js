const fs = require('fs')

const Writer = require('./model')
const EmailService = require('../shared/services/email')
const Attachment = require('../shared/util/attachment')
const remove = require('remove')


exports.create = (_id, props) => {

  return Writer.create(Object.assign({}, _id, props))

}

exports.read = _id => {

  return Writer.findOne({ _id })

}

exports.update = (_id, props) => {

  return Writer.findOneAndUpdate({ _id }, Object.assign({}, props), { new: true })

}

exports.remove = _id => {

  return Writer.remove({ _id })

}

exports.list = () => {

  return Writer.find()

}

exports.sendEmail = (cluster, managers) => {

  let deliveries = []

  for (let item of cluster.items) {

    let { from, to, message } = item

    deliveries.push({ from, to, message })

  }

  const Cc = managers.map(manager => manager.email ).join(', ')

  return Attachment.create(deliveries, cluster.name)
    .then( filepath => {

      EmailService.sendCluster(cluster.writer.email, Cc, { timestamp : Date.now(), clusterName: cluster.name }, [{ 'Content': fs.readFileSync(filepath).toString('base64'), 'Name': `${cluster.name}.pdf`, 'ContentType': 'application/pdf' }] )
      remove(filepath, err => {

        if (err)
          console.error(err)

      })

    })
    .catch( error => console.log(error) )

}
