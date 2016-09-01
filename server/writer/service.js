const fs = require('fs')

const Writer = require('./model')
const EmailService = require('../shared/services/email')
const Attachment = require('../shared/util/attachment')

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

  const Cc = managers.map(manager => manager.email ).join(', ')

  return Attachment.create()
    .then( filepath => EmailService.sendCluster(cluster.writer.email, Cc, cluster, [{ 'Content': fs.readFileSync(filepath).toString('base64'), 'Name': 'PrettyUnicorn.jpg', 'ContentType': 'application/pdf'  }]) )
    .catch( error => console.log(error) )

}
