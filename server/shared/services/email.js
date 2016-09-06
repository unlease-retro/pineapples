const postmark = require('postmark')
const { POSTMARK_KEY,
  EMAIL_FROM,
  EMAIL_TEMPLATES: {
    writerTagsTemplate, customerAfterOrderTemplate, assignmentToRider, unassignmentToRider
  }
} = require('../constants')

const client = new postmark.Client(POSTMARK_KEY)

const send = ({ TemplateId, TemplateModel, From, To, Cc, Attachments = [] }) => {

  return new Promise( (resolve, reject) => {

    if (Cc) client.sendEmailWithTemplate({
      TemplateId,
      TemplateModel,
      Attachments,
      From,
      To,
      Cc
    }, (err, success) => err ? reject(err) : resolve(success) )
    else client.sendEmailWithTemplate({
      TemplateId,
      TemplateModel,
      Attachments,
      From,
      To,
    }, (err, success) => err ? reject(err) : resolve(success) )

  })

}

exports.sendCluster = (To, Cc, TemplateModel, Attachments) => send({ TemplateId: writerTagsTemplate, TemplateModel, From: EMAIL_FROM, To, Cc, Attachments })
exports.sendToCustomerAfterOrder = (To, TemplateModel) => send({ TemplateId: customerAfterOrderTemplate, TemplateModel, From: EMAIL_FROM, To })
// TODO replace template ids
exports.sendToRiderAfterAssignment = (To, TemplateModel) => send({ TemplateId: assignmentToRider, TemplateModel, From: EMAIL_FROM, To })
exports.sendToRiderAfterUnassignment = (To, TemplateModel) => send({ TemplateId: unassignmentToRider, TemplateModel, From: EMAIL_FROM, To })
