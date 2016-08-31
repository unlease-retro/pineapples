import * as actions from './actionTypes'

export const updateUI = ui => ({
  type: actions.UPDATE,
  payload: {
    ...ui
  }
})

export const resetUI = () => ({
  type: actions.RESET
})
