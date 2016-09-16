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
/*eslint-disable */
function getQueryForDate(key, value, result) {

  switch (key) {

    case 'createdAtStart':
      result.createdAt = result.createdAt || {}
      result.createdAt.$gte = new Date(value)
      break

    case 'createdAtEnd':
      result.createdAt = result.createdAt || {}
      result.createdAt.$lte = new Date(value)
      break

    default:
      result[key] = value

  }

}
/*eslint-enable */
exports.constructFilterWithDateRange = (obj) => {

  const result = {}

  for (let prop in obj) {

    const value = obj[prop]

    getQueryForDate(prop, value, result)

  }

  return result

}
