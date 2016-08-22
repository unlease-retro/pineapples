import * as actions from './actionTypes'

export const someAction = props => ({
  type: actions.SOME_ACTION,
  payload: {
    ...props
  }
})
