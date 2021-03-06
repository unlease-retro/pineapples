import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import deepEqual from 'deep-equal'
import { getCentroid } from '../../shared/util'

import { MAP_OPTIONS, CIRCLE_OPTIONS, getPolygonOptions, POLYGON_SELECTED_COLOUR } from '../constants'

export class Map extends Component {

  componentWillMount() {

    // init InfoWindow
    this.InfoWindow = new google.maps.InfoWindow({})

    // init cluster, depot and pineapple temp arrays
    this.clusters = []
    this.depots = []

  }

  componentDidMount() {

    const { clusters, depots, selectedClusterIndex } = this.props
    const closeInfoWindow = this.closeInfoWindow.bind(this)

    // init map
    this.map = new google.maps.Map(this._map, MAP_OPTIONS)

    // add some listeners to the map
    this.map.addListener('click', closeInfoWindow)
    this.map.addListener('idle', closeInfoWindow)

    // plot those depots!
    this.plotDepots(depots)

    // plot those clusters!
    this.plotClusters(clusters, selectedClusterIndex)

  }

  componentWillReceiveProps(nextProps) {

    const { clusters, depots, selectedClusterIndex, selectedClusterId, selectedClusterColour } = this.props
    const { clusters: nextClusters, depots: nextDepots, selectedClusterIndex: nextSelectedClusterIndex, selectedClusterId: nextSelectedClusterId } = nextProps

    if (nextSelectedClusterIndex !== selectedClusterIndex) {

      const prevSelectedClusterKey = clusters.findKey( cluster => cluster.get('_id') === selectedClusterId )
      const nextSelectedClusterKey = nextClusters.findKey( cluster => cluster.get('_id') === nextSelectedClusterId )

      // reset previously selected cluster polygon colour to original colour
      this._setPolygonOptions(this.clusters[prevSelectedClusterKey], { strokeColor: selectedClusterColour, fillColor: selectedClusterColour })

      // set newly selected cluster polygon colour to selected colour
      this._setPolygonOptions(this.clusters[nextSelectedClusterKey], { strokeColor: POLYGON_SELECTED_COLOUR, fillColor: POLYGON_SELECTED_COLOUR })

    }

    // re-plot depots if updated
    if (!deepEqual(depots, nextDepots)) this.plotDepots(nextDepots)

    // re-plot clusters if updated
    if (!deepEqual(clusters, nextClusters)) this.plotClusters(nextClusters, selectedClusterIndex)

  }

  componentDidUpdate(prevProps) {

    const { mapCenter } = this.props
    const { mapCenter: prevMapCenter } = prevProps

    if (mapCenter.lat && mapCenter.lng && !deepEqual(mapCenter, prevMapCenter)) return this.map.panTo(mapCenter)

  }

  plotClusters(clusters, selectedClusterIndex) {

    const { selectCluster } = this.props
    const map = this.map

    // clear clusters
    while (this.clusters[0]) this.clusters.pop().setMap(null)

    clusters && clusters.map( (cluster, i) => {

      const centroid = cluster.get('centroid')
      const colour = cluster.get('colour')
      const name = cluster.get('name')
      const index = cluster.get('index')
      const pineapples = cluster.get('items')

      const clusterIndex = index || i
      const position = getCentroid(centroid)
      const POLYGON_OPTIONS = getPolygonOptions(colour)

      // plot those pineapples!
      const paths = this.plotPineapples(pineapples)

      // create cluster polygon
      const polygon = new google.maps.Polygon({ paths, map, ...POLYGON_OPTIONS })

      // set colour of selectedCluster
      if (clusterIndex === selectedClusterIndex) polygon.setOptions({strokeColor: POLYGON_SELECTED_COLOUR, fillColor: POLYGON_SELECTED_COLOUR})

      // open info window on hover
      polygon.addListener( 'mouseover', () => this.openInfoWindow(position, name) )

      // set selected cluster and map center as cluster centroid
      polygon.addListener( 'click', () => selectCluster(clusterIndex, position) )

      // store ref to cluster polygon
      this.clusters.push(polygon)

    })

  }

  plotDepots(depots) {

    const { setMapCenter } = this.props
    const map = this.map

    // clear depots
    while (this.depots[0]) this.depots.pop().setMap(null)

    depots && depots.map( depot => {

      const active = depot.get('active')
      const name = depot.get('name')
      const coordinates = depot.getIn([ 'location', 'coordinates' ])
      const lat = coordinates.get(1)
      const lng = coordinates.get(0)

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

      // store ref to depot circle
      this.depots.push(circle)

    })

  }

  plotPineapples(pineapples) {

    // extract coordinates
    const paths = pineapples.map( pineapple => {

      const coordinates = pineapple.getIn([ 'location', 'coordinates' ])
      const lat = coordinates.get(1)
      const lng = coordinates.get(0)

      return { lat, lng }

    })

    return paths.toArray()

  }

  closeInfoWindow() {

    // close the damn thing
    this.InfoWindow.close()

  }

  openInfoWindow(position, content) {

    const infowindow = this.InfoWindow

    // set content and position
    infowindow.setOptions({ content, position })

    // open it up!
    infowindow.open(this.map)

  }

  _setPolygonOptions(polygon, options) {

    polygon && polygon.setOptions(options)

  }

  render() {

    return (
      <div className={css(styles.base)} ref={ r => this._map = r }></div>
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
