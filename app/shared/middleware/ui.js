/**
  * @desc UI middleware - intercepts promise actions and manages UI state
*/

import { REQUEST, SUCCESS, FAILURE, UI_ACTION, SNACKBAR_DURATION } from '../constants'
import { getActionType } from '../util'
import { actions as UI } from '../../ui'

const UIMiddleware = store => next => action => {

  const { dispatch } = store
  const { type, payload } = action
  const { snackbar } = payload

  const actionType = getActionType(type)

  if (actionType === REQUEST) dispatch( UI.updateUI({ requesting: true, error: null, snackbar: null }) )
  if (actionType === SUCCESS) dispatch( UI.updateUI({ requesting: false, error: null, snackbar: snackbar ? snackbar : null  }) )
  if (actionType === FAILURE) dispatch( UI.updateUI({ requesting: false, error: payload }) )

  // auto hide snackbar
  if (snackbar && actionType !== UI_ACTION) setTimeout( () => dispatch( UI.updateUI({ snackbar: null }) ), SNACKBAR_DURATION)

  return next(action)

}

export default UIMiddleware
