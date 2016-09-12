/**
 * Created by BigaMasta on 9/12/16.
 */

export const buildLocationForReport = (page = '', sortBy = '', sortDirection = '') =>
  `/report?${page && `page=${page}`}${sortBy && `&sortBy=${sortBy}`}${sortDirection && `&sortDirection=${sortDirection}`}`

