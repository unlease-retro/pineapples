const postmark = require('postmark')
const { POSTMARK_KEY, EMAIL_FROM } = require('../constants')

const client = new postmark.Client(POSTMARK_KEY)

const send = ({ TemplateId, TemplateModel, From, To }) => {

  return new Promise( (resolve, reject) => {

    client.sendEmailWithTemplate({
      TemplateId,
      TemplateModel,
      From,
      To
    }, (err, success) => err ? reject(err) : resolve(success) )

  })

}

exports.sendClusterToWriter = (To, TemplateModel) => send({ TemplateId: 858128, TemplateModel, From: EMAIL_FROM, To })
exports.sendToCustomerAfterOrder = (To, TemplateModel) => send({ TemplateId: 855381, TemplateModel, From: EMAIL_FROM, To })
