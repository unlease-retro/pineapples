/**
 * Created by BigaMasta on 8/24/16.
 */
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import { DELIVERED, UNDELIVERED } from '../constants'

const Status = ({ item, itemIndex, actions: { changeStatus } }) => {

  const buttonLabel = item.delivered ? DELIVERED : UNDELIVERED

  Status._onClick = (item, itemIndex) => {

    const query = { delivered: !item.delivered }
    changeStatus(item, query, itemIndex)

  }

  return (
    <a className={ css(styles.statusAndMapItem, styles.button) } onClick={ () => Status._onClick(item, itemIndex) }>
      {buttonLabel}
    </a>
  )

}

const styles = StyleSheet.create({
  statusAndMapItem: {
    margin: '15px'
  },
  button: {
    backgroundColor: '#6FC9BC',
    borderRadius: '5px',
    padding: '10px',
    fontSize: '16px',
    textAlign: 'center',
    cursor: 'pointer'
  },
})

export default Status
