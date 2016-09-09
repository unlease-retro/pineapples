/**
 * Created by BigaMasta on 8/24/16.
 */
import React from 'react'
import Select from 'react-select'
import { grid as Grid } from '../../shared/components'

const Reason = ({ item, undeliveredReasonOptions, actions: { submitChangedReason } }) => {

  return (
    <div>

      <Grid>
        <Select
          value={item.get('undeliveredReason')}
          options={undeliveredReasonOptions}
          onChange={option => submitChangedReason(item.get('_id'), option && option.value, null, item.get('originalIndex'))} />
      </Grid>

    </div>
  )

}

export default Reason
