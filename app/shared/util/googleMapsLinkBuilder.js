/**
 * Created by BigaMasta on 9/5/16.
 */

exports.constructGoogleMapsLinkFor = (cluster) => {

  let link = 'https://www.google.sk/maps/dir'
  cluster && cluster.items
    .map(pineapple => pineapple.location.coordinates)
    .forEach( ([lng, lat]) => link += `/${lat},${lng}`)
  link += '/data=!3m1!4b1!4m2!4m1!3e1'
  return link

}
