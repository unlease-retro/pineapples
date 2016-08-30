/**
 * Created by BigaMasta on 8/25/16.
 */
import React from 'react'

const Button = ({ label, onClick }) => {

  return (
    <a onClick={onClick}>{label}</a>
  )

}

export default Button