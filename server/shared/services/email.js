const postmark = require('postmark')
const { POSTMARK_KEY, EMAIL_FROM, EMAIL_TEMPLATES: { writerTagsTemplate, customerAfterOrderTemplate } } = require('../constants')

const client = new postmark.Client(POSTMARK_KEY)

const send = ({ TemplateId, TemplateModel, From, To, Cc }) => {

  return new Promise( (resolve, reject) => {

    client.sendEmailWithTemplate({
      TemplateId,
      TemplateModel,
      From,
      To,
      Cc
    }, (err, success) => err ? reject(err) : resolve(success) )

  })

}

exports.sendCluster = (To, Cc, TemplateModel) => send({ TemplateId: writerTagsTemplate, TemplateModel, From: EMAIL_FROM, To, Cc })
exports.sendToCustomerAfterOrder = (To, TemplateModel) => send({ TemplateId: customerAfterOrderTemplate, TemplateModel, From: EMAIL_FROM, To })
