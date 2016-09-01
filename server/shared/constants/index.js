exports.HOST = process.env.HOST || 'localhost'
exports.PORT = process.env.PORT || '8001'

exports.ROLES = {
  SUPERUSER: 'SUPERUSER',
  MANAGER: 'MANAGER',
  RIDER: 'RIDER'
}

exports.POSTMARK_KEY = '4304dbb3-74a7-49e9-b417-6ca38b4bdefc'
exports.EMAIL_FROM = 'noreply@unlease.io'
exports.EMAIL_TEMPLATES = {
  writerTagsTemplate: 858128,
  customerAfterOrderTemplate: 855381,
  assignmentToRider: 858128, // TODO change the number
  unassignmentToRider: 858128 // TODO change the number
}

exports.ERROR = {
  PAYMENT_FAILED : 'We are unable to process you payment',
  GENERAL_ORDER_FAILED : 'We are unable to process you order',
  DAILY_LIMIT_REACHED : 'We\'ve reached daily limit, please come back tomorrow',
  TRACKING_ID_NOT_FOUND : 'Tracking ID not found'
}

// limit for prioritising clusters (in days)
exports.PRIORITY_LIMIT = 5
exports.PRIORITY_LIMIT_UNIT = 'days'

// range of colours representing cluster priority -> generated with: https://gka.github.io/palettes/#colors=#00cc00,#ffc200,#f4311a|steps=5|bez=0|coL=0
exports.PRIORITY_COLOURS = [ '#00cc00', '#aacb00', '#ffc200', '#fc8513', '#f4311a' ]

exports.MAP_ROUTE_OPTIONS = {
  mode: 'bicycling',
  language: 'en',
  region: 'gb',
  optimize: true,
}
