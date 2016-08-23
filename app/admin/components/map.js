import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import deepEqual from 'deep-equal'
import { getColour, getCentroid } from '../../shared/util'

// import * as Components from './'
import { MAP_OPTIONS, CIRCLE_OPTIONS, getMarkerOptions, getPolygonOptions } from '../constants'

export class Map extends Component {

  componentDidMount() {

    const { clusters, depots } = this.props

    // init map
    this.map = new google.maps.Map(this._map, MAP_OPTIONS)

    // init InfoWindow
    this.InfoWindow = new google.maps.InfoWindow({})

    // plot those depots!
    this.plotDepots(depots)

    // plot those clusters!
    this.plotClusters(clusters)

  }

  componentWillReceiveProps(nextProps) {

    const { clusters, depots } = this.props
    const { clusters: nextClusters, depots: nextDepots } = nextProps

    // re-plot depots if updated
    if (!deepEqual(depots, nextDepots)) this.plotDepots(nextDepots)

    // re-plot clusters if updated
    if (!deepEqual(clusters, nextClusters)) this.plotClusters(nextClusters)

  }

  componentDidUpdate(prevProps) {

    const { mapCenter } = this.props
    const { mapCenter: prevMapCenter } = prevProps

    if (mapCenter.lat && mapCenter.lng && !deepEqual(mapCenter, prevMapCenter)) return this.map.panTo(mapCenter)

  }

  plotClusters(clusters) {

    const { selectCluster } = this.props
    const map = this.map

    clusters && clusters.map( cluster => {

      const { items: pineapples, centroid, name } = cluster

      const colour = getColour()
      const position = getCentroid(centroid)
      const MARKER_OPTIONS = getMarkerOptions(colour, google.maps.SymbolPath.CIRCLE)
      const POLYGON_OPTIONS = getPolygonOptions(colour)

      // extract coordinates
      const paths = pineapples.map( ({ location: { coordinates: [ lng, lat ] } }) => ({ lat, lng }))

      // create marker for each pineapple
      paths.map( position => new google.maps.Marker({ position, map, ...MARKER_OPTIONS }) )

      // create cluster polygon
      const polygon = new google.maps.Polygon({ paths, map, ...POLYGON_OPTIONS })

      // open info window on hover
      polygon.addListener( 'mouseover', () => this.openInfoWindow(position, name) )

      // set selected cluster and map center as cluster centroid
      polygon.addListener( 'click', () => selectCluster(cluster, position) )

    })

  }

  plotDepots(depots) {

    const { setMapCenter } = this.props
    const map = this.map

    depots && depots.map( depot => {

      const { active, location: { coordinates: [ lng, lat ] }, name } = depot

      // depot isn't active!? abort!
      if (!active) return

      // extract coordinates
      const center = { lat, lng }

      // create depot circle
      const circle = new google.maps.Circle({ map, center, ...CIRCLE_OPTIONS })

      // open info window on hover
      circle.addListener( 'mouseover', () => this.openInfoWindow(center, name) )

      // set map center as depot center
      circle.addListener( 'click', () => setMapCenter(center) )

    })

  }

  openInfoWindow(position, content) {

    const infowindow = this.InfoWindow

    // set content and position
    infowindow.setOptions({ content, position })

    // open it up!
    infowindow.open(this.map)

  }

  render() {

    return (
      <div className={css(styles.base)} ref={ r => this._map = r }>
        {/* render other components here like search and filter */}
      </div>
    )

  }

}

const styles = StyleSheet.create({
  base: {
    height: '100%',
    margin: 0,
  }
})

export default Map
