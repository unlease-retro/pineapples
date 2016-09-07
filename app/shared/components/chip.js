import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from 'styles/settings'
import { icon as Icon } from './'
import { adjustColour } from '../util'

const Chip = ({ label, theme, icon, iconTheme, callback }) => {

  const { styles } = Chip

  const renderIcon = icon ? <div className={ css(styles.icon, theme && styles[`icon_${theme}`]) }><Icon name={icon} theme={iconTheme} /></div> : null

  return (
    <div className={ css(styles.base, callback && styles.link, theme && styles[theme]) } onClick={callback}>
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
    marginTop: '10px',
    marginRight: '10px',
    display: 'inline-flex',
    color: colors.dark,
    backgroundColor: colors.ltgrey,
    transition: '0.2s',
    ':last-of-type': {
      marginRight: 0,
    },
  },
  accent: {
    color: colors.light,
    backgroundColor: adjustColour(colors.accent, 20),
  },
  link: {
    cursor: 'pointer',
    ':hover': {
      color: colors.light,
      backgroundColor: adjustColour(colors.dkgrey, 20),
    },
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
  icon_accent: {
    backgroundColor: colors.accent,
  },
})

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  callback: PropTypes.func,
}

export default Chip
