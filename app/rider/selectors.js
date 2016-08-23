import { name } from './constants'

export const getAll = state => state.get(name).toJS()
export const getClusters = state => state.get(name).get('clusters').toJS()
