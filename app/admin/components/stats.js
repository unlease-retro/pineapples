/**
 * Created by BigaMasta on 8/25/16.
 */
import React from 'react'

class Stats extends React.Component {

  render() {

    const { stats } = this.props

    return (
      <div>
        <div>Riders with undelivered pineapples</div>
        {stats.ridersWithUndeliveredPineapples.map(rider => <div key={rider.value}>{rider.label}</div>)}
        <div>Today's orders: {stats.todaysOrders}</div>
        <div>Pineapples to be delivered today: {stats.pineapplesToBeDeliveredToday}</div>
      </div>
    )

  }

}

export default Stats