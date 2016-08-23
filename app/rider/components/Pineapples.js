/**
 * Created by BigaMasta on 8/23/16.
 */
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export default class Pineapples extends React.Component {

  render() {

    const { selectedCluster: { items } } = this.props

    return (
      <div>
        {items.map(item => {

          return (
            <div key={item._id}>
              <div className={ css(styles.address) }>
                <h2 className={ css(styles.orderTitle) }>Address: </h2>
                <p className={ css(styles.orderItem) }>{`${item.flatNumber} ${item.streetAddress}`}</p>
                <p className={ css(styles.orderItem) }>{item.postcode}</p>
              </div>

              <div className={ css(styles.orderInfo) }>
                <h2 className={ css(styles.orderTitle) }>From: </h2>
                <p className={ css(styles.orderItem) }>{item.from ? item.from : <i>Not specified</i>}</p>

                <h2 className={ css(styles.orderTitle) }>To: </h2>
                <p className={ css(styles.orderItem) }>{item.to}</p>

                <h2 className={ css(styles.orderTitle) }>Message: </h2>
                <p className={ css(styles.orderItem) }>{item.message}</p>
              </div>
            </div>
          )

        })}
      </div>
    )

  }

}

const styles = StyleSheet.create({
  orderInfo: {
    border: '5px solid black',
    borderRadius: '10px',
    margin: '0 10px',
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
  address: {
    margin: '50px 10px'
  }
})
