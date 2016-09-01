import React from 'react'

import { button as Button, grid as Grid, input as Input } from '../../shared/components'

const Component = ({ user, index, remove, update }) => {

  const handleRemove = () => remove(user._id, index)
  const handleUpdate = () => update(user._id, { firstname: Component.firstname, lastname: Component.lastname, email: Component.email }, index)

  const renderFirstname = user.firstname ? <Input defaultValue={user.firstname} placeholder='Firstname' onChange={ e => Component.firstname = e.target.value } /> : null
  const renderLastname = user.lastname ? <Input defaultValue={user.lastname} placeholder='Lastname' onChange={ e => Component.lastname = e.target.value } /> : null

  return (
    <Grid>

      { renderFirstname }
      { renderLastname }

      <Input defaultValue={user.email} type='email' placeholder='Email' onChange={ e => Component.email = e.target.value } />

      <Button label='Update' onClick={handleUpdate} theme='primary' />
      <Button label='Remove' onClick={handleRemove} theme='alert' />

    </Grid>
  )

}


export default Component
