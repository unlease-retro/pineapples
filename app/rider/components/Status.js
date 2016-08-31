/**
 * Created by BigaMasta on 8/24/16.
 */
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import { pineappleOptions, DELIVERED, UNDELIVERED } from '../constants'

const Status = ({ item, actions: { changeStatus } }) => {

  const defaultValue = item.delivered ? DELIVERED : UNDELIVERED

  Status._onStatusChange = (item, newStatus) => {

    const query = { delivered: newStatus === DELIVERED }

    changeStatus(item, query)

  }

  return (
    <select className={ css(styles.statusAndMapItem) } onChange={ (e) => Status._onStatusChange(item, e.target.value) }>

      {pineappleOptions.map(option => {

        if (defaultValue === option)
          return <option key={option} defaultValue>{option}</option>
        else
          return <option key={option}>{option}</option>

      })}

    </select>
  )

}

const styles = StyleSheet.create({
  statusAndMapItem: {
    margin: '15px'
  }
})

export default Status
