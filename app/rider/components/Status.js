/**
 * Created by BigaMasta on 8/24/16.
 */
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import { pineappleOptions, DELIVERED, UNDELIVERED } from '../constants'

class Status extends React.Component {

  render() {

    const { item } = this.props
    const defaultValue = item.delivered ? DELIVERED : UNDELIVERED

    return (
      <select className={ css(styles.statusAndMapItem) } onChange={ (e) => this._onStatusChange(item, e.target.value) }>

        {pineappleOptions.map(option => {

          if (defaultValue === option)
            return <option key={option} defaultValue>{option}</option>
          else
            return <option key={option}>{option}</option>

        })}

      </select>
    )

  }

  _onStatusChange(item, newStatus) {

    const { changeStatus } = this.props.actions
    const query = { delivered: newStatus === DELIVERED }

    changeStatus(item, query)

  }

}

const styles = StyleSheet.create({
  statusAndMapItem: {
    margin: '15px'
  }
})

export default Status