/**
 * Created by BigaMasta on 9/12/16.
 */

export const buildLocationForReport = (queryString) => `/report${queryString}`

export const buildLocationForOrderInfo = id =>
  `/report/pineapples/${id}`