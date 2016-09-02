/**
 * Created by BigaMasta on 8/24/16.
 */
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { button as Button } from '../../shared/components'

import { DELIVERED, UNDELIVERED } from '../constants'

const Status = ({ item, itemIndex, actions: { changeStatus } }) => {

  const buttonLabel = item.delivered ? DELIVERED : UNDELIVERED

  const _onClick = (item, itemIndex) => {

    const query = { delivered: !item.delivered }
    changeStatus(item, query, itemIndex)

  }

  return (
    <div className={ css(styles.base) }>
      <Button label={buttonLabel} onClick={ () => _onClick(item, itemIndex) } />
    </div>
  )


}

const styles = StyleSheet.create({
  base: {
    margin: '20px 0',
    textAlign: 'center',
  },
})

export default Status
