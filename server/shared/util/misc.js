/**
 * Created by BigaMasta on 9/14/16.
 */
exports.objectWithStrippedProps = (obj, ...props) => {

  const copiedObj = Object.assign({}, obj)
  props.forEach(prop => delete copiedObj[prop])
  return copiedObj

}

exports.toQueryString = obj => {

  let queryString = ''
  for (let prop in obj) {

    queryString += `&${prop}=${obj[prop]}`

  }

  return queryString ? `?${queryString}` : queryString

}