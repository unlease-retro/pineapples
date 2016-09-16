/**
 * Created by BigaMasta on 9/15/16.
 */
import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from 'styles/settings'
import { icon as Icon } from './'
import { adjustColour } from '../util'

const ClosableChip = ({ label, theme, closeIconTheme, onClose, onCloseData }) => {

  const { styles } = ClosableChip

  const renderCloseIcon = <div className={ css(styles.icon, styles.link, theme && styles[`icon_${theme}`]) }>
    <Icon name='close' theme={closeIconTheme} onClick={() => onClose(onCloseData)} />
  </div>

  return (
    <div className={ css(styles.base, theme && styles[theme]) }>
      <span className={ css(styles.label) }>{ label }</span>
      { renderCloseIcon }
    </div>
  )

}

ClosableChip.styles = StyleSheet.create({
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

ClosableChip.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  callback: PropTypes.func,
  onClose: PropTypes.func,
}

export default ClosableChip
