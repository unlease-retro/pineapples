import React from 'react'
import Role from './Role'


const Component = ({ role, onSubmit }) => {

  const handleSubmit = e => {

    e.preventDefault()

    let { firstname, lastname, email, phone, role } = Component

    onSubmit({ firstname, lastname, email, phone, role })

  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='firstname'>First name</label>
        <input type='text' onChange={ e => Component.firstname = e.target.value } name='firstname' placeholder='John' required/>
      </p>

      <p>
        <label htmlFor='lastname'>Last name</label>
        <input type='text' onChange={ e => Component.lastname = e.target.value } name='lastname' placeholder='Doe' required/>
      </p>

      <p>
        <label htmlFor='email'>E-mail</label>
        <input type='email' onChange={ e => Component.email = e.target.value } name='email' placeholder='johndoe@email.com' required/>
      </p>

      <p>
        <label htmlFor='phone'>Phone</label>
        <input type='tel' onChange={ e => Component.phone = e.target.value } name='phone' placeholder='00 0000 000' required/>
      </p>

      <p>
        <label htmlFor='role'>Role</label>
        <Role role={role} onChange={ r => Component.role = r } />
      </p>

      <p><button>Submit</button></p>
    </form>
  )

}


export default Component