const Discount = require('./model')



exports.read = code => {

  return Discount.findOne({ code })

}

