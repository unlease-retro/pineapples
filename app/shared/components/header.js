import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const Header = () => (
  <header className={ css(styles.red) }>
    Unlease :: Pineapples
  </header>
)

const styles = StyleSheet.create({
  red: {
    color: 'lime'
  }
})

export default Header
