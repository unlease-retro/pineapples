import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const Header = () => (
  <header className={ css(styles.lime) }>
    Unlease :: Pineapples
  </header>
)

const styles = StyleSheet.create({
  lime: {
    color: 'lime'
  }
})

export default Header
