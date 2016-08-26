import React from 'react'
import Role from './Role'



const Component = ({ role, createWriter, createUser, changeRole, selectedRole }) => {


  const handleSubmit = e => {

    e.preventDefault()

    if (selectedRole === 'WRITER')
      createWriter({ email: Component.email })
    else
      createUser({ firstname: Component.firstname, lastname: Component.lastname, email: Component.email, phone: Component.phone, role: selectedRole })

  }


  const renderFirstname = selectedRole !== 'WRITER' ?
    <p>
      <label htmlFor='firstname'>First name</label>
      <input type='text' onChange={ e => Component.firstname = e.target.value } name='firstname' placeholder='John' required/>
    </p> : null

  const renderLastname = selectedRole !== 'WRITER' ?
    <p>
      <label htmlFor='lastname'>Last name</label>
      <input type='text' onChange={ e => Component.lastname = e.target.value } name='lastname' placeholder='Doe' required/>
    </p> : null

  const renderPhone = selectedRole !== 'WRITER' ?
    <p>
      <label htmlFor='phone'>Phone</label>
      <input type='tel' onChange={ e => Component.phone = e.target.value } name='phone' placeholder='(555) 555-5555' required/>
    </p> : null


  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='role'>Role</label>
        <Role role={role} onChange={ role => changeRole(role) } />
      </p>

      {renderFirstname}
      {renderLastname}
      {renderPhone}

      <p>
        <label htmlFor='email'>E-mail</label>
        <input type='email' onChange={ e => Component.email = e.target.value } name='email' placeholder='john@doe.com' required/>
      </p>

      <p><button>Submit</button></p>
    </form>
  )

}



export default Component