import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors, media } from 'styles/settings'

import * as Components from './'
import * as SharedComponents from '../../shared/components'

const Overview = ({ stats, cutOff, setOverview }) => {

  const { styles } = Overview

  const _safeCutOff = () => confirm('Are you sure you want to generate new clusters? There is no way back.') && cutOff()

  return (
    <div className={ css(styles.base) }>

      <SharedComponents.position right='20px'>
        <SharedComponents.button onClick={ () => setOverview() } label='&times;' theme='icon' />
      </SharedComponents.position>

      <Components.stats stats={stats} />

      <SharedComponents.position right='20px' bottom='25px'>
        <SharedComponents.button label='Generate New Clusters' onClick={() => _safeCutOff()} theme='alert' />
      </SharedComponents.position>

    </div>
  )

}

Overview.styles = StyleSheet.create({
  base: {
    width: '100%',
    height: '100%',
    padding: '20px',
    position: 'fixed',
    top: 0,
    background: colors.light,
    boxShadow: '4px 0 20px 0 rgba(0, 0, 0, 0.2)',
    [media.aboveSmall]: {
      width: '35%',
    },
  },
})

export default Overview
