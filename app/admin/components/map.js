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
    this.generatePolygons(clusters)

  }

  componentWillReceiveProps(nextProps) {

    const { clusters } = this.props
    const { clusters: nextClusters } = nextProps

    // re-generate polygons if clusters updated
    if (!deepEqual(clusters, nextClusters)) return this.generatePolygons(nextClusters)

  }

  componentDidUpdate(prevProps) {

    const { mapCenter } = this.props
    const { mapCenter: prevMapCenter } = prevProps

    console.log(mapCenter)

    if (mapCenter.lat && mapCenter.lng && !deepEqual(mapCenter, prevMapCenter)) return this.map.panTo(mapCenter)

  }

  generatePolygons(clusters) {

    const { selectCluster } = this.props
    const map = this.map

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
      polygon.addListener( 'mouseover', () => this.openInfoWindow(position, name) )

      // set selected cluster and map center as cluster centroid
      polygon.addListener( 'click', () => selectCluster(cluster, position) )

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
