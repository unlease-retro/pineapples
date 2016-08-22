import React, { Component } from 'react'
import { getColour } from '../../shared/util'

// import * as Components from './'
import { MAP_STYLES } from '../constants'

export default class Map extends Component {

  componentDidMount() {

    const { clusters } = this.props

    // init map
    const map = new google.maps.Map(this._map, {
      center: {lat: 51.507351, lng: -0.127758},
      zoom: 12,
      styles: MAP_STYLES
    })

    this.generatePolygons(map, clusters)

  }

  generatePolygons(map, clusters) {

    clusters && clusters.map( (cluster) => {

      const { items: pineapples } = cluster

      const colour = getColour()

      // extract coordinates
      const paths = pineapples.map( ({ location: { coordinates: [ lng, lat ] } }) => ({ lat, lng }))

      // markers
      paths.map( (pineapple) => {

        /* eslint-disable no-unused-vars */
        const marker = new google.maps.Marker({
          position: pineapple,
          map: map,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: colour,
            fillOpacity: 0.8,
            scale: 4,
            strokeWeight: 0
          }
        })
        /* eslint-enable no-unused-vars */

      })

      // polygon
      /* eslint-disable no-unused-vars */
      const polygon = new google.maps.Polygon({
        paths: paths,
        map: map,
        strokeColor: colour,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: colour,
        fillOpacity: 0.35
      })
      /* eslint-enable no-unused-vars */

    })

  }

  render() {

    return (
      <div className='map' ref={ r => this._map = r }>
        {/* render other components here like search and filter */}
      </div>
    )

  }

}
