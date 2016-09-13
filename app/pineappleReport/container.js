import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as actions from './actions'
//import * as Components from './components'
import selectors from './selectors'

export class Report extends Component {

  componentWillMount() {

    const { actions: { fetchPineapple }, params: { pineappleId } } = this.props

    fetchPineapple(pineappleId)

  }

  render() {

    const {
      delivered,
      attempts,
      message,
      senderEmail,
      companyName,
      from,
      postcode,
      streetAddress,
      dispatched,
      createdAt,
      to,
      deliverable
    } = this.props

    return (
      <div>
        <div>DELIVERED {delivered ? 'yes' : 'no'}</div>
        <div>ATTEMPTS {attempts}</div>
        <div>MESSAGE {message}</div>
        <div>SENDEREMAIL {senderEmail}</div>
        <div>COMPANYNAME {companyName}</div>
        <div>FROM {from || 'Not specified'}</div>
        <div>POSTCODE {postcode}</div>
        <div>STREETADDRESS {streetAddress}</div>
        <div>DISPATCHED {dispatched ? 'yes' : 'no'}</div>
        <div>CREATEDAT {createdAt}</div>
        <div>TO {to}</div>
        <div>DELIVERABLE {deliverable ? 'yes' : 'no'}</div>
      </div>
    )

  }

}

export default connect(
  createStructuredSelector({ ...selectors }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Report)
