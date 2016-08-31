import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from 'styles/settings'
import { icon as Icon } from './'

const Chip = ({ label, icon, iconTheme, callback }) => {

  const { styles } = Chip

  const renderIcon = icon ? <div className={ css(styles.icon) }><Icon name={icon} theme={iconTheme} /></div> : null

  return (
    <div className={ css(styles.base) } onClick={callback}>
      { renderIcon }
      <span className={ css(styles.label) }>{ label }</span>
    </div>
  )

}

Chip.styles = StyleSheet.create({
  base: {
    width: '-webkit-fit-content',
    height: '32px',
    borderRadius: '16px',
    display: 'flex',
    color: colors.dark,
    backgroundColor: colors.ltgrey,
    cursor: 'pointer',
    transition: '0.2s',
    ':hover': {
      color: colors.light,
      backgroundColor: colors.dkgrey,
    }
  },
  label: {
    paddingLeft: '12px',
    paddingRight: '12px',
    lineHeight: '32px',
    fontSize: '14px',
  },
  icon: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.dkgrey,
  },
})

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  callback: PropTypes.func,
}

export default Chip
