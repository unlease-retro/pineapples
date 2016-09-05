// massive thanks to @sjparsons https://github.com/sjparsons/react-router-redux-immutable/blob/master/src/redux-router-init.js
// for figuring out how to handle react-router-redux with immutable. 100% legend.

export default () => {

  let prevRoutingState, prevRoutingStateJS

  return (state) => {

    const routingState = state.get('routing')

    if (typeof prevRoutingState === 'undefined' || prevRoutingState !== routingState) {

      prevRoutingState = routingState
      prevRoutingStateJS = routingState.toJS()

    }

    return prevRoutingStateJS

  }

}
