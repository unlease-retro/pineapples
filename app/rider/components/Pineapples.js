/**
 * Created by BigaMasta on 8/23/16.
 */
import React from 'react'

export default class Pineapples extends React.Component {
  render() {

    const { selectedCluster: { items } } = this.props

    return (
      <div>
        {items.map(item => {
          return (
            <div key={item._id}>
              <p>Address: </p>
              <p>{`${item.flatNumber} ${item.streetAddress}`}</p>
              <p>{item.postcode}</p>
              <p>{item.city}</p>
              <p>From: {item.from ? item.from : <i>Not specified</i>}</p>
              <p>To: {item.to}</p>
              <p>Message: {item.message}</p>
            </div>
          )
        })}
      </div>
    );
  }
}