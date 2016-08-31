import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from 'styles/settings'

const Icon = ({ name, theme }) => {

  const { styles } = Icon

  const className = css(styles.base, theme && styles[theme])

  return (
    <i className={`material-icons ${className}`}>
      { name }
    </i>
  )

}

Icon.styles = StyleSheet.create({
  base: {
    color: colors.dark,
  },
  accent: {
    color: colors.accent,
  },
  primary: {
    color: colors.primary,
  },
  pineapple: {
    color: colors.pineapple,
  },
})

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  theme: PropTypes.string,
}

export default Icon
