import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { css, StyleSheet } from 'aphrodite/no-important'
import { grid as Grid, divider as Divider } from '../shared/components'

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
      deliverable
    } = this.props

    return (
      <div>
        <div className={ css(styles.overall) }>
          <h1 className={ css(styles.h1) }>Order Info</h1>
          <div className={ css(styles.overallTable) }>

            <Grid>
              <label>ID</label>
              <div>{id}</div>
            </Grid>
            <Grid>
              <label>SENDER NAME</label>
              <div>{from || 'Not specified'}</div>
            </Grid>
            <Grid>
              <label>SENDER EMAIL</label>
              <div>{senderEmail}</div>
            </Grid>
            <Divider theme='dark'/>
            <Grid>
              <label>COMPANY NAME</label>
              <div>{companyName}</div>
            </Grid>
            <Grid>
              <label>RECEIVER NAME</label>
              <div>{to}</div>
            </Grid>
            <Grid>
              <label>STREET ADDRESS</label>
              <div>{streetAddress}</div>
            </Grid>
            <Grid>
              <label>POSTCODE</label>
              <div>{postcode}</div>
            </Grid>
            <Grid>
              <label>MESSAGE</label>
              <div>{message}</div>
            </Grid>
            <Divider theme='dark'/>
            <Grid>
              <label>ATTEMPTS</label>
              <div>{attempts}</div>
            </Grid>
            <Grid>
              <label>CREATED AT</label>
              <div>{new Date(createdAt).toLocaleDateString('en-GB')}</div>
            </Grid>
            <Grid>
              <label>STATUS</label>
              <div>
                {deliverable ? 'deliverable, ' : 'not deliverable, '}
                <br/>
                {dispatched ? 'dispatched, ' : 'not dispatched, '}
                <br/>
                {delivered ? 'delivered' : 'not delivered'}
              </div>
            </Grid>
          </div>
        </div>
      </div>

    )

  }

}

PineappleReport.styles = StyleSheet.create({
  overallTable: {
    width: '400px',
    margin: '20px auto',
    border: '2px solid black',
    padding: '20px',
    borderRadius: '10px'
  },
  overall: {
    padding: '40px',
  },
  h1: {
    textAlign: 'center'
  },
})

export default connect(
  createStructuredSelector({ ...selectors }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(PineappleReport)
