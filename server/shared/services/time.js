/**
  * @desc Time service - provides an interface to common time/date operations
*/

const moment = require('moment')
const today = moment()

exports.today = today

exports.getTimestamp = (date) => moment(date || today).valueOf()

exports.subtract = (date, duration, unit) => moment(date).subtract(duration, unit)
