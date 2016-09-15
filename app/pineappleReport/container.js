import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { css, StyleSheet } from 'aphrodite/no-important'
import { grid as Grid, divider as Divider } from '../shared/components'
import { colors } from '../shared/styles/settings'

import * as actions from './actions'
//import * as Components from './components'
import selectors from './selectors'

export class PineappleReport extends Component {

  componentWillMount() {

    const { actions: { fetchPineapple }, params: { pineappleId } } = this.props

    fetchPineapple(pineappleId)

  }

  render() {

    const { styles } = PineappleReport

    const {
      id,
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
      deliverable,
      reason,
      phoneNumber,
      stripeChargeId
    } = this.props

    return (
      <div>
        <div className={ css(styles.overall) }>
          <h1 className={ css(styles.h1) }>Order Info</h1>
          <div className={ css(styles.overallTable) }>

            <Grid>
              <label>ID</label>
              <div className={ css(styles.valueFontColor) }>{id}</div>
            </Grid>
            <Grid>
              <label>SENDER NAME</label>
              <div className={ css(styles.valueFontColor) }>{from || 'Not specified'}</div>
            </Grid>
            <Grid>
              <label>SENDER EMAIL</label>
              <div className={ css(styles.valueFontColor) }>{senderEmail}</div>
            </Grid>
            <Divider theme='dark'/>
            <Grid>
              <label>COMPANY NAME</label>
              <div className={ css(styles.valueFontColor) }>{companyName}</div>
            </Grid>
            <Grid>
              <label>RECEIVER NAME</label>
              <div className={ css(styles.valueFontColor) }>{to}</div>
            </Grid>
            <Grid>
              <label>RECEIVER PHONE NUMBER</label>
              <div className={ css(styles.valueFontColor) }>{phoneNumber || 'Not specified'}</div>
            </Grid>
            <Grid>
              <label>STREET ADDRESS</label>
              <div className={ css(styles.valueFontColor) }>{streetAddress}</div>
            </Grid>
            <Grid>
              <label>POSTCODE</label>
              <div className={ css(styles.valueFontColor) }>{postcode}</div>
            </Grid>
            <Grid>
              <label>MESSAGE</label>
              <div className={ css(styles.valueFontColor) }>{message}</div>
            </Grid>
            <Divider theme='dark'/>
            <Grid>
              <label>ATTEMPTS</label>
              <div className={ css(styles.valueFontColor) }>{attempts}</div>
            </Grid>
            <Grid>
              <label>CREATED AT</label>
              <div className={ css(styles.valueFontColor) }>{new Date(createdAt).toLocaleDateString('en-GB')}</div>
            </Grid>
            <Grid>
              <label>STATUS</label>
              <div className={ css(styles.valueFontColor) }>
                {deliverable ? 'deliverable, ' : 'not deliverable, '}
                <br/>
                {dispatched ? 'dispatched, ' : 'not dispatched, '}
                <br/>
                {delivered ? 'delivered' : 'not delivered'}
              </div>
            </Grid>
            <Grid>
              <label>REASON FOR UNDELIVERY</label>
              <div className={ css(styles.valueFontColor) }>{reason || 'Not specified'}</div>
            </Grid>
            <Grid>
              <label>STRIPE CHARGE ID</label>
              <div className={ css(styles.valueFontColor) }>{stripeChargeId || 'FREE ORDER'}</div>
            </Grid>
          </div>
        </div>
      </div>

    )

  }

}

PineappleReport.styles = StyleSheet.create({
  overallTable: {
    maxWidth: '700px',
    margin: '20px auto',
    border: '2px solid black',
    padding: '20px',
    borderRadius: '10px',
  },
  overall: {
    padding: '40px',
  },
  h1: {
    textAlign: 'center'
  },
  valueFontColor: {
    color: colors.primary
  }
})

export default connect(
  createStructuredSelector({ ...selectors }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(PineappleReport)
