import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const Card = ({ children, onClick }) => (
  <div className={ css(styles.card) } onClick={onClick}>{ children }</div>
)

const styles = StyleSheet.create({
  card: {
    width: '100%',
    margin: '20px 0',
    padding: '20px',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 6px, rgba(0, 0, 0, 0.1) 0px 1px 4px',
  },
})

export default Card
