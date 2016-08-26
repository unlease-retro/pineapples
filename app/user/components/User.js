import React from 'react'


const Component = ({ user, remove, update }) => {


  const handleRemove = () => remove(user._id)
  const handleUpdate = () => update(user._id, { firstname: Component.firstname, lastname: Component.lastname, email: Component.email })

  const renderFirstname = user.firstname ? <li>
    <label>First name:</label>
    <input type='text' onChange={ e => Component.firstname = e.target.value } defaultValue={user.firstname} />
  </li> : null

  const renderLastname = user.firstname ? <li>
    <label>Last name:</label>
    <input type='text' onChange={ e => Component.lastname = e.target.value } defaultValue={user.lastname} />
  </li> : null



  return (
    <ul>

      {renderFirstname}
      {renderLastname}

      <li>
        <label>Email:</label>
        <input type='email' onChange={ e => Component.email = e.target.value } defaultValue={user.email} />
      </li>

      <li><button onClick={handleUpdate}>Update</button></li>

      <li><button onClick={handleRemove}>Remove</button></li>
    </ul>
  )

}


export default Component