/**
 * Created by BigaMasta on 8/24/16.
 */
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Select from 'react-select'
import { button as Button, grid as Grid } from '../../shared/components'
import { OTHER } from '../../shared/constants/index'

const Reason = ({ item, itemIndex, undeliveredReasonOptions, actions: { changeReason, submitChangedReason, changeReasonComment } }) => {

  let reasonInput
  const renderInput = item.undeliveredReason === OTHER && <input
      type='text'
      value={item.reasonComment || ''}
      ref={c => reasonInput = c}
      onChange={e => changeReasonComment(e.target.value, itemIndex)} />

  return (
    <div>

      <Grid>
        <Select
          value={item.undeliveredReason}
          options={undeliveredReasonOptions}
          onChange={option => changeReason(option.value, itemIndex)} />

        { renderInput }
      </Grid>

      <div className={ css(styles.centered) }>
        <Button
          label='Submit'
          onClick={() => {

            if (item.undeliveredReason !== OTHER)
              submitChangedReason(item._id, item.undeliveredReason, null, itemIndex)
            else
              submitChangedReason(item._id, item.undeliveredReason, reasonInput.value, itemIndex)

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
