/**
 * Created by BigaMasta on 8/24/16.
 */
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { toggle as Toggle } from '../../shared/components'

const Status = ({ item, itemIndex, actions: { changeStatus } }) => {

  const label = item.delivered ? 'Delivered' : 'Undelivered'

  return (
    <div className={ css(styles.base) }>
      <Toggle label={label} active={item.delivered} callback={ (checked) => changeStatus(item, { delivered: checked }, itemIndex) } />
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
