/**
 * Created by BigaMasta on 9/5/16.
 */

const prefix = 'https://www.google.sk/maps/dir'
const cycleRoute = '/data=!3m1!4b1!4m2!4m1!3e1'

exports.constructGoogleMapsLinkFor = (cluster) => {

  let constructedLink
  cluster && cluster.items
    .map(pineapple => pineapple.location.coordinates)
    .forEach( ([lng, lat]) => constructedLink += `/${lat},${lng}`)
  return `${prefix}${constructedLink}${cycleRoute}`

}
