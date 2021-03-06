import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors, media } from 'styles/settings'

import * as Components from './'
import * as SharedComponents from '../../shared/components'
import {buildLocationForOrderInfo} from '../../shared/util/location'
const Panel = ({ clusterIndex, clusterId, clusterName, clusterPosition, clusterDepotName, clusterDepotPosition, clusterRiderId, clusterDeliverable, clusterColour, clusterUndeliverablePineapples, clusterTotalPineapples, clusterDistance, clusterDuration, clusterDelivered, clusterStatus, riders, totalClusters, fetchRiders, selectCluster, updateCluster, setMapCenter }) => {

  const style = {
    borderBottomColor: clusterColour,
    position: 'relative',
  }

  const onPrevClick = () => {

    const prevIndex = clusterIndex <= 0 ? totalClusters - 1 : clusterIndex - 1

    selectCluster(prevIndex)

  }

  const onNextClick = () => {

    const nextIndex = clusterIndex >= totalClusters - 1 ? 0 : clusterIndex + 1

    selectCluster(nextIndex)

  }

  const onDeliverableChange = deliverable => {

    if (deliverable)
      updateCluster(clusterId, { deliverable }, clusterIndex)
    else
      updateCluster(clusterId, { deliverable, rider: null }, clusterIndex).then( () => fetchRiders() )

  }

  const renderUndeliverablePineapples = clusterUndeliverablePineapples.length > 0 ? (
    <SharedComponents.row>
      <div className={ css(styles.label) }>{clusterUndeliverablePineapples.length} undeliverable pineapples:</div>
      { clusterUndeliverablePineapples.map( pineapple => <div className={ css(styles.list) } key={ pineapple.get('_id') }>
        <a href={buildLocationForOrderInfo(pineapple.get('_id'))} target='_blank'>{ pineapple.get('_id') } ({ pineapple.get('undeliveredReason') })
        </a>
      </div> ) }
    </SharedComponents.row>
  ) : null

  return (
    <div className={ css(styles.base) }>

      <SharedComponents.position right='20px'>
        <SharedComponents.button onClick={ () => selectCluster() } label='close' theme='icon' />
      </SharedComponents.position>

      <div onClick={ () => setMapCenter(clusterPosition) } className={ css(styles.name) } style={style}>
        { clusterName }
        <SharedComponents.badge label={clusterTotalPineapples} theme='pineapple' />
      </div>

      <SharedComponents.row>
        <SharedComponents.chip label={clusterDepotName} icon='store' iconTheme='light' callback={ () => setMapCenter(clusterDepotPosition) } />
        <SharedComponents.chip label={`${clusterDistance}km`} icon='directions' iconTheme='light' />
        <SharedComponents.chip label={`${clusterDuration}`} icon='directions_bike' iconTheme='light' />
        <SharedComponents.chip label={`${clusterStatus}`} theme={ clusterStatus === 'Delivered' ? 'accent' : 'light' } icon='timeline' iconTheme='light' />
      </SharedComponents.row>

      <SharedComponents.row>
        <Components.riders riders={riders} selectedRider={clusterRiderId} disabled={!clusterDeliverable || Boolean(clusterDelivered)} selectRider={ rider => updateCluster(clusterId, { rider }, clusterIndex).then( () => fetchRiders() ) } />
      </SharedComponents.row>

      <SharedComponents.row>
        <SharedComponents.toggle label={'Deliverable'} active={clusterDeliverable} callback={onDeliverableChange} disabled={clusterDelivered} />
      </SharedComponents.row>

      { renderUndeliverablePineapples }

      <SharedComponents.position left='20px' bottom='25px'>
        <SharedComponents.button onClick={onPrevClick} label='Prev Cluster' theme='primary' />
      </SharedComponents.position>

      <SharedComponents.position right='20px' bottom='25px'>
        <SharedComponents.button onClick={onNextClick} label='Next Cluster' theme='primary' />
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
    background: colors.light,
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
  label: {
    color: colors.error,
  },
  list: {
    marginTop: '10px',
    paddingLeft: '5px',
    fontSize: '14px',
    color: colors.dkgrey,
    ':before': {
      content: '"- "',
    },
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
