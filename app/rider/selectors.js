import { name } from './constants'

export const getAll = state => state.get(name).toJS()
export const getClusters = state => state.get(name).get('clusters').toJS()
export const selectedCluster = state => {

  const index = state.get(name).get('selectedClusterIndex')
  return state.getIn([name, 'clusters', index]) && state.getIn([name, 'clusters', index]).toJS()

}
