import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from 'styles/settings'

const Title = ({ content }) => (
  <h3 className={ css(styles.title) }>{ content }</h3>
)

const styles = StyleSheet.create({
  title: {
    width: '100%',
    margin: '40px 0 20px',
    color: colors.dark,
  },
})

export default Title
