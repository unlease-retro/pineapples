const promiseMiddleware = () => (next) => (action) => {

  const { promise, types, ...rest } = action

  if (!promise) return next(action)

  const [ REQUEST, SUCCESS, FAILURE ] = types

  next({ ...rest, type: REQUEST })

  return promise().then( res => next({ payload: res, type: SUCCESS }), err => next({ payload: err, type: FAILURE }) )

}

export default promiseMiddleware
