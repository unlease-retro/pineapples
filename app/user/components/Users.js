import React from 'react'
import Role from './role'
import User from './user'


const Component = ({ role, users, deleteUser, onChange }) => {

  return (
    <div>
      <div>
        <h2>Select role:</h2>
        <Role onChange={onChange} role={role} />
      </div>

      <h2>Users</h2>
      <div>
        {users.map(user => <User key={user._id} deleteUser={deleteUser} user={user} />)}
      </div>
    </div>
  )

}


export default Component