import React from 'react'
import Select from 'react-select'
import { AVAILABLE_ROLES as roles } from '../constants'

const Component = ({ role, selectedRole, onChange }) => {

  const renderRoles = roles.reduce( (filtered, item, index) => {

    if ( role === 'SUPERUSER' || index > 1 ) filtered.push({ value: item, label: item })

    return filtered

  }, [])

  return (

    <Select
      name='role'
      placeholder='Select role'
      value={selectedRole || null}
      options={renderRoles}
      autoBlur={true}
      clearable={false}
      onChange={ option => onChange(option && option.value || option) }
    />

  )

}


export default Component
