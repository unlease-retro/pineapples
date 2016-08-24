/**
 * Created by Izzy on 24/08/2016.
 */

const config = require('../../config')
const stripe = require('stripe')(config.get('payment').stripe.secretKey)


exports.createCharge = (props) => {

  return stripe.charges.create({

    amount: props.payment.unitPriceInPence,
    currency: props.payment.currency,
    source: props.payment.stripeToken,
    description: `Charge for ${props.data.senderEmail}`

  })

}

exports.refundCharges = (chargeId) => {

  return stripe.refunds.create({
    
    charge : chargeId
    
  })
  
}
