/**
 * Created by BigaMasta on 8/25/16.
 */
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from 'styles/settings'

import * as SharedComponents from '../../shared/components'

const Stats = ({ stats }) => {

  const { styles } = Stats

  return (
    <div className={ css(styles.base) }>

      <SharedComponents.row>
        <div className={ css(styles.figure) }>{stats.todaysOrders}</div>
        <div className={ css(styles.label) }>Pineapples ordered today</div>
      </SharedComponents.row>

      <SharedComponents.row>
        <div className={ css(styles.figure) }>{stats.pineapplesToBeDeliveredToday}</div>
        <div className={ css(styles.label) }>Pineapples left to deliver today</div>
      </SharedComponents.row>

      <SharedComponents.row>
        <div className={ css(styles.figure) }>{stats.ridersWithUndeliveredPineapples.length}</div>
        <div className={ css(styles.label) }>Riders with unfinished clusters</div>
      </SharedComponents.row>

      <SharedComponents.row>
        {stats.ridersWithUndeliveredPineapples.map(rider => <div className={ css(styles.rider) } key={rider.value}>{rider.label}</div>)}
      </SharedComponents.row>

    </div>
  )

}

Stats.styles = StyleSheet.create({
  base: {
    marginTop: '40px',
  },
  figure: {
    fontSize: '30px',
    color: colors.pineapple,
  },
  label: {
    color: colors.dkgrey,
  },
  rider: {
    fontSize: '14px',
    color: colors.dark,
  },
})

export default Stats
