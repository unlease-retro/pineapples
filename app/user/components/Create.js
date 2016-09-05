import React from 'react'
import Role from './Role'

import { button as Button, grid as Grid, input as Input } from '../../shared/components'

const Component = ({ role, createWriter, createUser, changeRole, selectedRole }) => {

  const isWriter = selectedRole === 'WRITER'

  const handleSubmit = () => isWriter ? createWriter({ email: Component.email }) : createUser({ firstname: Component.firstname, lastname: Component.lastname, email: Component.email, phone: Component.phone, role: selectedRole })

  const renderFirstname = !isWriter ? <Input placeholder='Firstname' onChange={ e => Component.firstname = e.target.value } /> : null
  const renderLastname = !isWriter ? <Input placeholder='Lastname' onChange={ e => Component.lastname = e.target.value } /> : null
  const renderPhone = !isWriter ? <Input type='tel' placeholder='Phone' onChange={ e => Component.phone = e.target.value } /> : null


  return (
    <div>
      <Grid>

        <Role role={role} selectedRole={selectedRole} onChange={ role => changeRole(role) } />

        {renderFirstname}
        {renderLastname}
      </Grid>
      <Grid>

        {renderPhone}

        <Input type='email' placeholder='Email' onChange={ e => Component.email = e.target.value } />

        <Button label='Submit' onClick={handleSubmit} theme='accent' />
      </Grid>
    </div>

  )

}



export default Component
