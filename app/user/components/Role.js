import React from 'react'
import { roles } from '../constants'



const Component = ({ onChange }) => {

  const handleChange = e => onChange(e.target.value)

  return (
    <select name='role' onChange={handleChange}>
      <option value='any'>ANY</option>
      {roles.map(role => <option key={role} value={role}>{role}</option>)}
    </select>
  )

}


export default Component