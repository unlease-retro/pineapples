/**
 * Created by BigaMasta on 9/7/16.
 */
const reorderClusterByWaypointOrder = (cluster) =>
  cluster.items = cluster.route.waypoint_order.map(orderItemIndex =>
    cluster.items[orderItemIndex]
  )

exports.reorderClustersByWaypointOrder = (clusters) =>
  clusters.map(reorderClusterByWaypointOrder)
