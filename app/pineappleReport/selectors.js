import { createSelector } from 'reselect'
import { name } from './constants'

// static
//const getAll = state => state.get(name)
const getPineapple = state => state.getIn([ name, 'pineapple' ])

//computed
const getDelivered = createSelector( [ getPineapple ], pineapple => pineapple && pineapple.get('delivered') )
const getAttempts = createSelector( [ getPineapple ], pineapple => pineapple && pineapple.get('attempts') )
const getMessage = createSelector( [ getPineapple ], pineapple => pineapple && pineapple.get('message') )
const getSenderEmail = createSelector( [ getPineapple ], pineapple => pineapple && pineapple.get('senderEmail') )
const getCompanyName = createSelector( [ getPineapple ], pineapple => pineapple && pineapple.get('companyName') )
const getFrom = createSelector( [ getPineapple ], pineapple => pineapple && pineapple.get('from') )
const getPostcode = createSelector( [ getPineapple ], pineapple => pineapple && pineapple.get('postcode') )
const getStreetAddress = createSelector( [ getPineapple ], pineapple => pineapple && pineapple.get('streetAddress') )
const getDispatched = createSelector( [ getPineapple ], pineapple => pineapple && pineapple.get('dispatched') )
const getCreatedAt = createSelector( [ getPineapple ], pineapple => pineapple && pineapple.get('createdAt') )
const getTo = createSelector( [ getPineapple ], pineapple => pineapple && pineapple.get('to') )
const getDeliverable = createSelector( [ getPineapple ], pineapple => pineapple && pineapple.get('deliverable') )
const getId = createSelector( [ getPineapple ], pineapple => pineapple && pineapple.get('_id') )
const getReason = createSelector( [ getPineapple ], pineapple => pineapple && pineapple.get('undeliveredReason') )
const getPhoneNumber = createSelector( [ getPineapple ], pineapple => pineapple && pineapple.get('phoneNumber') )

export default {
  id: getId,
  delivered: getDelivered,
  attempts: getAttempts,
  message: getMessage,
  senderEmail: getSenderEmail,
  companyName: getCompanyName,
  from: getFrom,
  postcode: getPostcode,
  streetAddress: getStreetAddress,
  dispatched: getDispatched,
  createdAt: getCreatedAt,
  to: getTo,
  deliverable: getDeliverable,
  reason: getReason,
  phoneNumber: getPhoneNumber
}
