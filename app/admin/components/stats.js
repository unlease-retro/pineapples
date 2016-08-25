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
      </div>
    )

  }

}

export default Stats