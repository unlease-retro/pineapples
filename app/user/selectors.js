import { name } from './constants'

export const getAll = state => state.get(name)
export const getRole = state => state.getIn([ name, 'role' ])
