import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { cAlign } from 'styles/mixins'

const Splash = () => (
  <div className={ css(styles.base) }></div>
)

const styles = StyleSheet.create({
  base: Object.assign({}, cAlign, {
    width: '192px',
    height: '192px',
    zIndex: 4,
    background: 'url(./android-chrome-192x192.png)',
  })
})

export default Splash
