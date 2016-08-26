/**
  * @desc Priority service - provides an interface to common prioritising cluster operations
*/

const Time = require('./time')
const { PRIORITY_LIMIT, PRIORITY_LIMIT_UNIT, PRIORITY_COLOURS } = require('../constants')

const getPriorityLimit = () => Time.subtract(Time.today, PRIORITY_LIMIT, PRIORITY_LIMIT_UNIT)

const getPriorityIncrement = (length) => ( Time.getTimestamp() - Time.getTimestamp(getPriorityLimit()) ) / length

exports.getClusterColour = (priority) => {

  const priorityLevel = Math.round( ( Time.getTimestamp() - priority ) / getPriorityIncrement(PRIORITY_COLOURS.length) )

  return PRIORITY_COLOURS[ ( priorityLevel >= PRIORITY_COLOURS.length ? PRIORITY_COLOURS.length - 1 : priorityLevel ) ]

}
