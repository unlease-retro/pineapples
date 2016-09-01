import React from 'react'
import Role from './Role'


const Component = ({ role, fetchWriters, fetchUsers }) => {

  const handleChange = value => {

    if (value === 'WRITER')
      fetchWriters()
    else
      fetchUsers(value)

  }

  return (
    <div>
      <Role role={role} onChange={handleChange} />
    </div>
  )

}


export default Component
