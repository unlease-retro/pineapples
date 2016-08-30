import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const Splash = () => (
  <div className={ css(styles.lime) }>
    Unlease :: Pineapples
  </div>
)

const styles = StyleSheet.create({
  lime: {
    color: 'lime'
  }
})

export default Splash
