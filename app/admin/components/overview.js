import React from 'react'
import { browserHistory } from 'react-router'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors, media } from 'styles/settings'

import * as Components from './'
import * as SharedComponents from '../../shared/components'

const Overview = ({ generateUnlocked, stats, cutOff, user: { email }, fetchRiders, fetchStats, setOverview, setGenerateLock }) => {

  const { styles } = Overview

  // confirm cutoff action, dispatch cutoff action and then dispatch fetchRiders + fetchStats on success
  const _safeCutOff = () => confirm('Are you sure you want to generate new clusters? There is no way back.') && cutOff().then( () => {

    fetchRiders()
    fetchStats()

  })

  return (
    <div className={ css(styles.base) }>

      <SharedComponents.position right='20px'>
        <SharedComponents.button onClick={ () => setOverview() } label='close' theme='icon' />
      </SharedComponents.position>

      <Components.stats stats={stats} />

      <SharedComponents.divider />

      <SharedComponents.row>
        <SharedComponents.button label='Manage Users' onClick={ () => browserHistory.push('users') } />
        <SharedComponents.button label='View Report' onClick={ () => browserHistory.push('report') } style={{ marginLeft: '20px' }} />
      </SharedComponents.row>

      <SharedComponents.row>
        <SharedComponents.toggle label={'I am ready to CLEAR ALL current clusters'} active={generateUnlocked} callback={setGenerateLock} />
        <SharedComponents.button label='Generate New Clusters' onClick={ () => _safeCutOff() } theme='alert' disabled={!generateUnlocked} />
      </SharedComponents.row>

      <SharedComponents.row>
        <div className={ css(styles.user) }>Logged in as: { email }</div>
      </SharedComponents.row>

    </div>
  )

}

Overview.styles = StyleSheet.create({
  base: {
    width: '100%',
    height: 'auto',
    minHeight: '100%',
    position: 'absolute',
    padding: '20px',
    top: 0,
    background: colors.light,
    boxShadow: '4px 0 20px 0 rgba(0, 0, 0, 0.2)',
    zIndex: 2,
    overflowY: 'scroll',
    [media.aboveSmall]: {
      width: '35%',
      height: '100%',
      position: 'fixed',
    },
  },
  user: {
    fontSize: '12px',
    color: colors.dkgrey,
  },
})

export default Overview
