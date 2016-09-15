export const name = 'report'
export const roles = [ 'SUPERUSER', 'MANAGER' ]
export const fields = {
  streetAddress: new String(),
  postcode: new String(),
  from: new String(),
  to: new String(),
  message: new String(),
  senderEmail: new String(),
  companyName: new String(),
  dispatched: new Boolean(),
  delivered: new Boolean(),
  deliverable: new Boolean(),
  phoneNumber: new String(),
  createdAt: new Date(),
}
export const DISPLAY_FIELDS = Object.keys(fields)
export const perPage = 20