export const name = 'report'
export const roles = [ 'SUPERUSER', 'MANAGER' ]


export const FIELDS = {
  streetAddress: {
    caption: 'streetAddress',
    type: new String(),
    displayable: true,
  },
  postcode: {
    caption: 'postcode',
    type: new String(),
    displayable: true,
  },
  from: {
    caption: 'from',
    type: new String(),
    displayable: true,
  },
  to: {
    caption: 'to',
    type: new String(),
    displayable: true,
  },
  message: {
    caption: 'message',
    type: new String(),
    displayable: true,
  },
  senderEmail: {
    caption: 'senderEmail',
    type: new String(),
    displayable: true,
  },
  companyName: {
    caption: 'companyName',
    type: new String(),
    displayable: true,
  },
  dispatched: {
    caption: 'dispatched',
    type: new Boolean(),
    displayable: true,
  },
  delivered: {
    caption: 'delivered',
    type: new Boolean(),
    displayable: true,
  },
  deliverable: {
    caption: 'deliverable',
    type: new Boolean(),
    displayable: true,
  },
  phoneNumber: {
    caption: 'phoneNumber',
    type: new String(),
    displayable: true,
  },
  createdAt: {
    caption: 'createdAt',
    type: new Date(),
    displayable: true,
  },
  stripeChargeId: {
    caption: 'stripeChargeId',
    type: new String(),
    displayable: true,
  }
}

export const perPage = 20