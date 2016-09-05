import React from 'react'
import Select from 'react-select'
import { AVAILABLE_ROLES as roles } from '../constants'

const Component = ({ role, selectedRole, onChange }) => {

  const renderRoles = roles.map( (item, index) => {

    if ( role === 'SUPERUSER' || index > 1 ) return { value: item, label: item }

  })

  return (

    <Select
      name='role'
      placeholder='Select role'
      value={selectedRole || role}
      options={renderRoles}
      autoBlur={true}
      clearable={false}
      onChange={ option => onChange(option && option.value || option) }
    />

  )

}


export default Component
