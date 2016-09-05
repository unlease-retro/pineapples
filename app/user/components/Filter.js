import React from 'react'
import Role from './Role'


const Component = ({ role, fetchWriters, fetchUsers, changeRoleForUpdate, selectedRole }) => {

  const handleChange = value => {

    changeRoleForUpdate(value)
    if (value === 'WRITER')
      fetchWriters()
    else
      fetchUsers(value)

  }

  return (
    <div style={{ marginBottom: '20px' }}>
      <Role role={role} selectedRole={selectedRole} onChange={handleChange} />
    </div>
  )

}


export default Component
