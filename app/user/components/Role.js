import React from 'react'
import { roles } from '../constants'



const Component = ({ role, onChange }) => {

  const handleChange = e => onChange(e.target.value)

  const renderRoles = roles.map((item, index) => {

    if (role === 'SUPERUSER') {

      return <option key={index} value={item}>{item}</option>

    } else {

      if (index > 1)
        return <option key={index} value={item}>{item}</option>

    }

  })



  return (
    <select name='role' onChange={handleChange}>
      <option>Choose a role</option>
      {renderRoles}
    </select>
  )

}


export default Component