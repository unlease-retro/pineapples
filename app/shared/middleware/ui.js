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

  // dispatch UI actions according to action type
  if (actionType === REQUEST) dispatch( UI.updateUI({ requesting: true, error: null }) )
  if (actionType === FAILURE) dispatch( UI.updateUI({ requesting: false, error: payload }) )
  if (actionType === SUCCESS) {

    // only pass snackbar if defined to avoid premature closure
    const props = { requesting: false, error: null }
    if (snackbar) props.snackbar = snackbar

    dispatch( UI.updateUI(props) )

  }

  // auto hide snackbar
  if (snackbar && actionType !== UI_ACTION) setTimeout( () => dispatch( UI.updateUI({ snackbar: null }) ), SNACKBAR_DURATION)

  return next(action)

}

export default UIMiddleware
