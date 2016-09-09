/**
 * Created by BigaMasta on 8/24/16.
 */
import React from 'react'
import Select from 'react-select'
import { grid as Grid } from '../../shared/components'

const Reason = ({ item, undeliveredReasonOptions, index, actions: { submitChangedReason } }) => {

  return (
    <div>

      <Grid>
        <Select
          value={item.get('undeliveredReason')}
          options={undeliveredReasonOptions}
          onChange={option => submitChangedReason(item.get('_id'), option && option.value, null, index)}
          autoBlur={true}
          placeholder='Select undeliverable reason ...'
        />
      </Grid>

    </div>
  )

}

export default Reason
