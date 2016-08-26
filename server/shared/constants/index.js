exports.POSTMARK_KEY = '4304dbb3-74a7-49e9-b417-6ca38b4bdefc'
exports.HOST = process.env.HOST || 'localhost'
exports.PORT = process.env.PORT || '8001'
exports.ROLES = {
  SUPERUSER: 'SUPERUSER',
  MANAGER: 'MANAGER',
  RIDER: 'RIDER'
}
exports.EMAIL_FROM = 'noreply@unlease.io'
exports.EMAIL_TEMPLATES = {
  writerTagsTemplate: 858128,
  customerAfterOrderTemplate: 855381
}

exports.ERROR = {

  PAYMENT_FAILED : 'We are unable to process you payment',
  GENERAL_ORDER_FAILED : 'We are unable to process you order',
  DAILY_LIMIT_REACHED : 'We\'ve reached daily limit, please come back tomorrow',
  TRACKING_ID_NOT_FOUND : 'Tracking ID not found'

}