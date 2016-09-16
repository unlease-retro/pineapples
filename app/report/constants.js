export const name = 'report'
export const roles = [ 'SUPERUSER', 'MANAGER' ]


export const FIELDS = {
  streetAddress: {
    caption: 'streetAddress',
    key : 'streetAddress',
    type: new String(),
    displayable: true,
  },
  postcode: {
    caption: 'postcode',
    key : 'postcode',
    type: new String(),
    displayable: true,
  },
  from: {
    caption: 'from',
    key : 'from',
    type: new String(),
    displayable: true,
  },
  to: {
    caption: 'to',
    key : 'to',
    type: new String(),
    displayable: true,
  },
  message: {
    caption: 'message',
    key : 'message',
    type: new String(),
    displayable: true,
  },
  senderEmail: {
    caption: 'senderEmail',
    key : 'senderEmail',
    type: new String(),
    displayable: true,
  },
  companyName: {
    caption: 'companyName',
    key : 'companyName',
    type: new String(),
    displayable: true,
  },
  dispatched: {
    caption: 'dispatched',
    key : 'dispatched',
    type: new Boolean(),
    displayable: true,
  },
  delivered: {
    caption: 'delivered',
    key : 'delivered',
    type: new Boolean(),
    displayable: true,
  },
  deliverable: {
    caption: 'deliverable',
    key : 'deliverable',
    type: new Boolean(),
    displayable: true,
  },
  phoneNumber: {
    caption: 'phoneNumber',
    key : 'phoneNumber',
    type: new String(),
    displayable: true,
  },
  createdAt: {
    caption: 'createdAt',
    key : 'createdAt',
    type: new Date(),
    displayable: true,
  },
  updatedAt: {
    caption: 'Updated At',
    key : 'updatedAt',
    type: new Date(),
    displayable: true,
  },
  stripeChargeId: {
    caption: 'stripe',
    key : 'stripeChargeId',
    type: new String(),
    displayable: true,
  }
}

export const perPage = 20