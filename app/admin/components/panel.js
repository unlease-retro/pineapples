import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors, media } from 'styles/settings'

import * as Components from './'
import * as SharedComponents from '../../shared/components'

const Panel = ({ clusterIndex, clusterId, clusterName, clusterPosition, clusterDepotName, clusterDepotPosition, clusterRiderId, clusterDeliverable, clusterColour, clusterTotalPineapples, riders, totalClusters, fetchRiders, selectCluster, updateCluster, setMapCenter }) => {

  const style = {
    borderBottomColor: clusterColour,
    position: 'relative',
  }

  const onNextClick = () => {

    const nextIndex = clusterIndex >= totalClusters - 1 ? 0 : clusterIndex + 1

    selectCluster(nextIndex)

  }

  return (
    <div className={ css(styles.base) }>

      <SharedComponents.position right='0px'>
        <SharedComponents.button onClick={ () => selectCluster() } label='&times;' theme='icon' />
      </SharedComponents.position>

      <div onClick={ () => setMapCenter(clusterPosition) } className={ css(styles.name) } style={style}>
        { clusterName }
        <SharedComponents.badge label={clusterTotalPineapples} theme='pineapple' />
      </div>

      <div onClick={ () => setMapCenter(clusterDepotPosition) } className={ css(styles.depot) }>
        { clusterDepotName } Depot
      </div>

      <Components.riders riders={riders} selectedRider={clusterRiderId} selectRider={ rider => updateCluster(clusterId, { rider }, clusterIndex).then( () => fetchRiders() ) } />

      <SharedComponents.toggle label={'Deliverable'} active={clusterDeliverable} callback={ deliverable => updateCluster(clusterId, { deliverable }, clusterIndex) } />

      <SharedComponents.position right='20px' bottom='25px'>
        <SharedComponents.button onClick={onNextClick} label='Next Cluster' />
      </SharedComponents.position>

    </div>
  )

}

const styles = StyleSheet.create({
  base: {
    width: '100%',
    height: '100%',
    padding: '20px',
    position: 'fixed',
    top: 0,
    background: 'white',
    boxShadow: '4px 0 20px 0 rgba(0, 0, 0, 0.2)',
    [media.aboveSmall]: {
      width: '35%',
    },
  },
  name: {
    fontSize: '30px',
    marginTop: '40px',
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: '4px solid',
  },
  depot: {
    marginBottom: '20px',
    padding: '10px',
    borderRadius: '4px',
    border: `1px solid ${colors.secondary}`,
    cursor: 'pointer',
    transition: '0.2s',
    ':hover': {
      color: colors.light,
      background: colors.secondary,
    }
  },
})

Panel.propTypes = {
  clusterName: PropTypes.string.isRequired,
  clusterDepotName: PropTypes.string.isRequired,
  clusterDepotPosition: PropTypes.object.isRequired,
  clusterTotalPineapples: PropTypes.number.isRequired,
  setMapCenter: PropTypes.func.isRequired,
}

export default Panel
