import React, { Component } from 'react'

import { button as Button, grid as Grid, input as Input } from '../../shared/components'


class User extends Component {

  render() {

    const { _id, index } = this.props.user

    const handleRemove = () => this.props.remove(_id, index)
    const handleUpdate = () => this.props.update(_id, { firstname: this.firstname, lastname: this.lastname, email: this.email }, index)

    const renderFirstname = this.props.user.firstname ? <Input defaultValue={this.props.user.firstname} placeholder='Firstname' onChange={ e => this.firstname = e.target.value } /> : null
    const renderLastname = this.props.user.lastname ? <Input defaultValue={this.props.user.lastname} placeholder='Lastname' onChange={ e => this.lastname = e.target.value } /> : null

    return (
      <Grid>

        { renderFirstname }
        { renderLastname }

        <Input defaultValue={this.props.user.email} type='email' placeholder='Email' onChange={ e => this.email = e.target.value } />

        <Button label='Update' onClick={handleUpdate} theme='primary' />
        <Button label='Remove' onClick={handleRemove} theme='alert' />

      </Grid>
    )

  }

}

export default User