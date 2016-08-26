import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Role from './Role'



const Component = ({ role, createWriter, createUser }) => {

  let styles = StyleSheet.create({
    hidden: {
      display: 'none'
    },
  })


  let className = css(
    Component.role === 'WRITER' ? styles.hidden : null
  )


  const handleSubmit = e => {

    e.preventDefault()

    if (Component.role === 'WRITER')
      createWriter({ email: Component.email })
    else
      createUser({ firstname: Component.firstname, lastname: Component.lastname, email: Component.email, phone: Component.phone, role: Component.role })

  }


  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='role'>Role</label>
        <Role role={role} onChange={ r => Component.role = r } />
      </p>

      <p className={className}>
        <label htmlFor='firstname'>First name</label>
        <input type='text' onChange={ e => Component.firstname = e.target.value } name='firstname' placeholder='John' required/>
      </p>

      <p className={className}>
        <label htmlFor='lastname'>Last name</label>
        <input type='text' onChange={ e => Component.lastname = e.target.value } name='lastname' placeholder='Doe' required/>
      </p>

      <p className={className}>
        <label htmlFor='phone'>Phone</label>
        <input type='tel' onChange={ e => Component.phone = e.target.value } name='phone' placeholder='(555) 555-5555' required/>
      </p>

      <p>
        <label htmlFor='email'>E-mail</label>
        <input type='email' onChange={ e => Component.email = e.target.value } name='email' placeholder='john@doe.com' required/>
      </p>

      <p><button>Submit</button></p>
    </form>
  )

}



export default Component