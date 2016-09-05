/**
 * Created by BigaMasta on 8/23/16.
 */
import React from 'react'
import Status from './Status'
import Reason from './Reason'
import { card as Card, grid as Grid, link as Link } from '../../shared/components'

const Pineapples = ({ selectedCluster: { items }, undeliveredReasonOptions, actions: { changeStatus, changeReason, submitChangedReason, changeReasonComment } }) => {

  const statusActions = { changeStatus }
  const reasonActions = { changeReason, submitChangedReason, changeReasonComment }

  return (
    <div>
      {items.map(item => {

        const renderReason = !item.delivered ? <Reason item={item} actions={reasonActions} undeliveredReasonOptions={undeliveredReasonOptions}/> : null

        return (
          <Card disabled={item.delivered} key={item._id}>

            <Grid staticCells nonPaddedCells>
              <div>From:</div>
              <div>{item.from ? item.from : <i>Not specified</i>}</div>
            </Grid>

            <Grid staticCells nonPaddedCells>
              <div>To:</div>
              <div>{item.to}</div>
            </Grid>

            <Grid staticCells nonPaddedCells>
              <div>Address:</div>
              <div>
                <div>{item.companyName}</div>
                <div>{item.streetAddress}</div>
                <div>{item.postcode}</div>
                <div><Link href={item.googleMapsLink} label='Map'/></div>
              </div>
            </Grid>

            <Grid staticCells nonPaddedCells>
              <div>Message:</div>
              <div>{item.message}</div>
            </Grid>

            <Status item={item} actions={statusActions} />

            {renderReason}

          </Card>
        )

      })}

    </div>
  )

}

export default Pineapples
