import React from 'react'


const Component = ({ user, deleteUser }) => {

  const handleDelete = () => deleteUser(user._id)

  return (
    <ul>
      <li><strong>First name:</strong> {user.firstname}</li>
      <li><strong>Last name:</strong> {user.lastname}</li>
      <li><strong>E-mail:</strong> {user.email}</li>
      <li><button onClick={handleDelete}>Delete</button></li>
    </ul>
  )

}


export default Component