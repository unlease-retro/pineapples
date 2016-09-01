/**
 * Created by BigaMasta on 8/24/16.
 */
import React from 'react'
import { button as Button } from '../../shared/components'

import { DELIVERED, UNDELIVERED } from '../constants'

const Status = ({ item, itemIndex, actions: { changeStatus } }) => {

  const buttonLabel = item.delivered ? DELIVERED : UNDELIVERED

  const _onClick = (item, itemIndex) => {

    const query = { delivered: !item.delivered }
    changeStatus(item, query, itemIndex)

  }

  return <Button label={buttonLabel} onClick={ () => _onClick(item, itemIndex) } />


}

export default Status
