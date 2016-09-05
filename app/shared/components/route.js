import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from 'styles/settings'

const Route = ({ label, to }) => (
  <Link to={to} className={ css(styles.base) }>{ label }</Link>
)

const styles = StyleSheet.create({
  base: {
    height: '36px',
    display: 'inline-block',
    paddingBottom: '4px',
    border: 0,
    borderBottom: `1px solid ${colors.secondary}`,
    lineHeight: '36px',
    fontSize: '14px',
    fontWeight: 500,
    color: colors.secondary,
    cursor: 'pointer',
    outline: 0,
    transition: '0.2s',
    textDecoration: 'none',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
})

Route.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default Route
