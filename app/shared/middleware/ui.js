/**
  * @desc UI middleware - intercepts promise actions and manages UI state
*/

import { REQUEST, SUCCESS, FAILURE } from '../constants'
import { getActionType } from '../util'
import { actions as UI } from '../../ui'

const UIMiddleware = store => next => action => {

  const { dispatch } = store
  const { type, payload } = action

  const actionType = getActionType(type)

  if (actionType === REQUEST) dispatch( UI.updateUI({ requesting: true, error: null }) )
  if (actionType === SUCCESS) dispatch( UI.updateUI({ requesting: false, error: null }) )
  if (actionType === FAILURE) dispatch( UI.updateUI({ requesting: false, error: payload }) )

  return next(action)

}

export default UIMiddleware
