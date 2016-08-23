import React, { Component } from 'react'
import { getColour, getCentroid } from '../../shared/util'

// import * as Components from './'
import { MAP_STYLES, getMarkerOptions, getPolygonOptions } from '../constants'

export default class Map extends Component {

  componentDidMount() {

    const { clusters } = this.props

    // init map
    const map = new google.maps.Map(this._map, {
      center: {lat: 51.507351, lng: -0.127758},
      zoom: 12,
      styles: MAP_STYLES
    })

    // init InfoWindow
    this.InfoWindow = new google.maps.InfoWindow({})

    // generate those polygons!
    this.generatePolygons(map, clusters)

  }

  generatePolygons(map, clusters) {

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

    return (
      <div className='map' ref={ r => this._map = r }>
        {/* render other components here like search and filter */}
      </div>
    )

  }

}
