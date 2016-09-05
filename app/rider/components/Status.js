/**
 * Created by BigaMasta on 8/24/16.
 */
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { toggle as Toggle } from '../../shared/components'

const Status = ({ item, actions: { changeStatus } }) => {

  //console.log(item.toJS())

  return <div className={ css(styles.base) }>
    <Toggle label={'Delivered'} active={item.get('delivered')} callback={ (checked) => changeStatus(item.get('_id'), { delivered: checked }, item.get('originalIndex')) } />
  </div>

}


const styles = StyleSheet.create({
  base: {
    margin: '20px 0',
    textAlign: 'center',
  },
})

export default Status
