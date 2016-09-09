/**
 * Created by BigaMasta on 8/23/16.
 */
import React from 'react'
import Status from './Status'
import Reason from './Reason'
import { card as Card, divider as Divider, grid as Grid, link as Link } from '../../shared/components'

const Pineapples = ({ selectedCluster, undeliveredReasonOptions, actions: { changeStatus, changeReason, submitChangedReason, changeReasonComment } }) => {

  const items = selectedCluster.get('items')
  const statusActions = { changeStatus }
  const reasonActions = { changeReason, submitChangedReason, changeReasonComment }

  return (
    <div>
      {items.map(item => {

        const renderReason = !item.get('delivered') ? <Reason item={item} actions={reasonActions} undeliveredReasonOptions={undeliveredReasonOptions}/> : null

        return (
          <Card disabled={item.get('delivered')} key={item.get('_id')}>

            <Grid staticCells nonPaddedCells leftAlign>
              <div>From:</div>
              <div>{item.get('from')? item.get('from'): <i>Not specified</i>}</div>
            </Grid>

            <Grid staticCells nonPaddedCells leftAlign>
              <div>To:</div>
              <div>{item.get('to')}</div>
            </Grid>

            <Grid staticCells nonPaddedCells leftAlign>
              <div>Address:</div>
              <div>
                <div>{item.get('companyName')}</div>
                <div>{item.get('streetAddress')}</div>
                <div>{item.get('postcode')}</div>
                <div><Link href={item.get('googleMapsLink')} label='Map' theme='primary' /></div>
              </div>
            </Grid>

            <Grid staticCells nonPaddedCells leftAlign>
              <div>Message:</div>
              <div>{item.get('message')}</div>
            </Grid>

            <Divider />

            <Status item={item} actions={statusActions} />

            {renderReason}

          </Card>
        )

      })}

    </div>
  )

}

export default Pineapples
