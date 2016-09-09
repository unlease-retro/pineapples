/**
 * Created by BigaMasta on 8/24/16.
 */
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Select from 'react-select'
import { button as Button, grid as Grid, input as Input } from '../../shared/components'
import { OTHER } from '../../shared/constants/index'

const Reason = ({ item, undeliveredReasonOptions, actions: { changeReason, submitChangedReason, changeReasonComment } }) => {

  const renderInput = item.get('undeliveredReason') === OTHER && <Input
      value={item.get('reasonComment') || ''}
      onChange={e => changeReasonComment(e.target.value, item.get('originalIndex'))} />

  return (
    <div>

      <Grid>
        <Select
          value={item.get('undeliveredReason')}
          options={undeliveredReasonOptions}
          onChange={option => changeReason(option && option.value, item.get('originalIndex'))} />

        { renderInput }
      </Grid>

      <div className={ css(styles.centered) }>
        <Button
          label='Submit'
          onClick={() => {

            if (item.get('undeliveredReason') !== OTHER)
              submitChangedReason(item.get('_id'), item.get('undeliveredReason'), null, item.get('originalIndex'))
            else
              submitChangedReason(item.get('_id'), item.get('undeliveredReason'), item.get('reasonComment'), item.get('originalIndex'))

          }}/>
      </div>

    </div>
  )

}

const styles = StyleSheet.create({
  centered: {
    margin: '20px 0',
    textAlign: 'center',
  },
})

export default Reason
