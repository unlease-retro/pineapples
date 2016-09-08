/**
 * Created by BigaMasta on 8/24/16.
 */
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { toggle as Toggle } from '../../shared/components'

const Status = ({ item, actions: { changeStatus } }) => {

  const handleCheck = (delivered) => {

    if (delivered)
      changeStatus(item.get('_id'), { delivered, undeliveredReason: null, reasonComment: null }, item.get('originalIndex'))
    else
      changeStatus(item.get('_id'), { delivered }, item.get('originalIndex'))

  }

  return <div className={ css(styles.base) }>
    <Toggle label={'Delivered'} active={item.get('delivered')} callback={handleCheck} />
  </div>

}


const styles = StyleSheet.create({
  base: {
    margin: '20px 0',
    textAlign: 'center',
  },
})

export default Status
