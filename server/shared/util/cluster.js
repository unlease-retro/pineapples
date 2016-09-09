/**
 * Created by BigaMasta on 9/7/16.
 */
exports.reorderClusterByWaypointOrder = (cluster) =>
  cluster.items = cluster.route.waypoint_order.map(orderItemIndex =>
    cluster.items[orderItemIndex]
  )

//exports.reorderClustersByWaypointOrder = (clusters) =>
//  clusters.map(reorderClusterByWaypointOrder)
