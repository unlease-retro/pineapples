export const name = 'admin'
export const roles = [ 'SUPERUSER', 'MANAGER' ]

/* eslint-disable */
export const MAP_STYLES = [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]}]
/* eslint-enable */

export const getMarkerOptions = (colour, path) => ({ icon: { path, fillColor: colour, fillOpacity: 0.8, scale: 4, strokeWeight: 0 } })
export const getPolygonOptions = colour => ({ strokeColor: colour, fillColor: colour, strokeOpacity: 0.8, strokeWeight: 2, fillOpacity: 0.35 })
