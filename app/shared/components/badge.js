import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from 'styles/settings'

const Badge = ({ label, theme }) => {

  const { styles } = Badge

  const className = css(styles.base, theme && styles[theme])

  return (
    <div className={className}>
      <span className={ css(styles.label) }>{ label }</span>
    </div>
  )

}

Badge.styles = StyleSheet.create({
  base: {
    width: '24px',
    height: '24px',
    marginLeft: '20px',
    borderRadius: '50%',
    display: 'inline-block',
    verticalAlign: 'middle',
    color: colors.light,
    backgroundColor: colors.accent,
  },
  pineapple: {
    color: colors.light,
    backgroundColor: colors.pineapple,
  },
  label: {
    height: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: '12px',
  },
})

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  theme: PropTypes.string,
}

export default Badge
