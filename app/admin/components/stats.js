/**
 * Created by BigaMasta on 8/25/16.
 */
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
// import { colors } from 'styles/settings'

import * as SharedComponents from '../../shared/components'

const Stats = ({ stats }) => {

  const { styles } = Stats

  return (
    <div className={ css(styles.base) }>

      <SharedComponents.row>
        <div>Today's orders: {stats.todaysOrders}</div>
      </SharedComponents.row>

      <SharedComponents.row>
        <div>Pineapples to be delivered today: {stats.pineapplesToBeDeliveredToday}</div>
      </SharedComponents.row>

      <SharedComponents.row>
        <div>Riders with unfinished clusters</div>
        {stats.ridersWithUndeliveredPineapples.map(rider => <div key={rider.value}>{rider.label}</div>)}
      </SharedComponents.row>

    </div>
  )

}

Stats.styles = StyleSheet.create({
  base: {
    marginTop: '40px',
  },
})

export default Stats
