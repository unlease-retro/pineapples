import { name } from './constants'

export const getAll = state => state.get(name)
export const getClusters = state => state.getIn([ name, 'clusters' ]).toJS()
