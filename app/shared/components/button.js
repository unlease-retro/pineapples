/**
 * Created by BigaMasta on 8/25/16.
 */
import React from 'react'

const Button = ({ label, onClick, className }) => (
  <a className={className} onClick={onClick}>
    {label}
  </a>
)

export default Button
