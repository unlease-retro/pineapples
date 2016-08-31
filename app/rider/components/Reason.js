/**
 * Created by BigaMasta on 8/24/16.
 */
import React from 'react'
import { reasons, EMPTY_VALUE } from '../../shared/constants/index'

const Reason = ({ item, itemIndex, actions: { changeReason } }) => {

  const _onChangeReason = (item, option, itemIndex) => {

    changeReason(item._id, option, itemIndex)

  }

  return (
    <select value={item.undeliveredReason || EMPTY_VALUE} onChange={ (e) => _onChangeReason(item, e.target.value, itemIndex) }>
      {reasons.map(reason => <option key={reason}>{reason}</option> )}
    </select>
  )

}

export default Reason
