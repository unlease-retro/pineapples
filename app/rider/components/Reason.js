/**
 * Created by BigaMasta on 8/24/16.
 */
import React from 'react'
import Select from 'react-select'
import { OTHER } from '../../shared/constants/index'
import Button from '../../shared/components/button'

const Reason = ({ item, itemIndex, undeliveredReasonOptions, actions: { changeReason, submitChangedReason, changeReasonComment } }) => {

  let reasonInput
  const renderInput = item.undeliveredReason === OTHER && <input
      type='text'
      value={item.reasonComment || ''}
      ref={c => reasonInput = c}
      onChange={e => changeReasonComment(e.target.value, itemIndex)} />

  return (
    <div>
      <Select
        value={item.undeliveredReason}
        options={undeliveredReasonOptions}
        onChange={option => changeReason(option.value, itemIndex)}/>

      {renderInput}

      <Button
        label='Submit'
        onClick={() => {

          if (item.undeliveredReason !== OTHER)
            submitChangedReason(item._id, item.undeliveredReason, null, itemIndex)
          else
            submitChangedReason(item._id, item.undeliveredReason, reasonInput.value, itemIndex)

        }}/>


    </div>
  )

}

export default Reason
