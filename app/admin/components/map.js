import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import deepEqual from 'deep-equal'
import { getColour, getCentroid } from '../../shared/util'

// import * as Components from './'
import { MAP_OPTIONS, getMarkerOptions, getPolygonOptions } from '../constants'

export class Map extends Component {

  componentDidMount() {

    const { clusters } = this.props

    // init map
    this.map = new google.maps.Map(this._map, MAP_OPTIONS)

    // init InfoWindow
    this.InfoWindow = new google.maps.InfoWindow({})

    // generate those polygons!
    this.generatePolygons(this.map, clusters)

  }

  componentWillReceiveProps(nextProps) {

    const { clusters } = this.props
    const { clusters: nextClusters } = nextProps

    // re-generate polygons if clusters updated
    if (!deepEqual(clusters, nextClusters)) return this.generatePolygons(this.map, nextClusters)

  }

  generatePolygons(map, clusters) {

    console.log('generatePolygons', clusters.length)

    const { selectCluster } = this.props

    clusters && clusters.map( (cluster) => {

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
      polygon.addListener( 'mouseover', () => this.openInfoWindow(map, position, name) )

      // open info window on hover
      polygon.addListener( 'click', () => selectCluster(cluster) )

    })

  }

  openInfoWindow(map, position, content) {

    const infowindow = this.InfoWindow

    // set content and position
    infowindow.setOptions({ content, position })

    // open it up!
    infowindow.open(map)

  }

  render() {

    const { isPanelOpen } = this.props
    const className = css(styles.base, isPanelOpen && styles.shrink)

    return (
      <div className={className} ref={ r => this._map = r }>
        {/* render other components here like search and filter */}
      </div>
    )

  }

}

const styles = StyleSheet.create({
  base: {
    height: '100%',
    margin: 0,
  },
  shrink: {
    width: '65%',
    transform: 'translateX(65%)'
  }
})

export default Map
