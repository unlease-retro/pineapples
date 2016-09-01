/**
 * Created by BigaMasta on 8/23/16.
 */
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Status from './Status'
import Reason from './Reason'

const Pineapples = ({ selectedCluster: { items }, undeliveredReasonOptions, actions: { changeStatus, changeReason, submitChangedReason, changeReasonComment } }) => {

  const statusActions = { changeStatus }
  const reasonActions = { changeReason, submitChangedReason, changeReasonComment }
  //const renderMapButton = <a className={ css(styles.flexyItem, styles.mapButton, styles.statusAndMapItem) }>Map</a>

  return (
    <div>
      {items.map((item, index) => {

        const overallStyles = [styles.layout, styles.orderInfo]

        if (item.delivered)
          overallStyles.push(styles.orderInfoDelivered)
        else
          overallStyles.push(styles.orderInfoUndelivered)

        return (
          <div key={item._id} className={ css(...overallStyles) }>
            <div className={ css(styles.flexyItem) }>
              <h2 className={ css(styles.orderTitle) }>From: </h2>
              <p className={ css(styles.orderItem) }>{item.from ? item.from : <i>Not specified</i>}</p>

              <h2 className={ css(styles.orderTitle) }>To: </h2>
              <p className={ css(styles.orderItem) }>{item.to}</p>
            </div>

            <div className={ css(styles.flexyItem) }>
              <h2 className={ css(styles.orderTitle) }>Address: </h2>
              <p className={ css(styles.orderItem) }>{`${item.flatNumber} ${item.streetAddress}`}</p>
              <p className={ css(styles.orderItem) }>{item.postcode}</p>
            </div>

            <div className={ css(styles.flexyItemFull) }>
              <h2 className={ css(styles.orderTitle) }>Message: </h2>
              <p className={ css(styles.orderItem) }>{item.message}</p>
            </div>

            <div className={ css(styles.flexyItemFull, styles.statusAndMap) }>
              <Status item={item} itemIndex={index} actions={statusActions} />
              <Reason item={item} itemIndex={index} actions={reasonActions} undeliveredReasonOptions={undeliveredReasonOptions}/>
              {/* commented out for showcase renderMapButton */}
            </div>
          </div>
        )

      })}
    </div>
  )

}

const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around'
  },
  flexyItem: {
    flexGrow: '1',
    flexShrink: '0',
    flexBasis: '250px'
  },
  flexyItemFull: {
    flexGrow: '1',
    flexShrink: '0',
    flexBasis: '500px'
  },
  orderInfo: {
    border: '5px solid black',
    borderRadius: '10px',
    margin: '10px',
  },
  orderInfoDelivered: {
    backgroundColor: '#d3d3d3',
    color: '#939393'
  },
  orderInfoUndelivered: {
    backgroundColor: '#FEDC81'
  },
  orderTitle: {
    fontSize: '26px',
    marginLeft: '10px',
    marginBottom: '5px'
  },
  orderItem: {
    fontSize: '16px',
    marginLeft: '30px'
  },
  mapButton: {
    backgroundColor: '#6FC9BC',
    borderRadius: '5px',
    padding: '10px',
    fontSize: '16px',
    textAlign: 'center',
  },
  statusAndMap: {
    textAlign: 'center',
  }
})

export default Pineapples
