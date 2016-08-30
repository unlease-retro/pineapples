import React from 'react'
import User from './User'


const Component = ({ data, remove, update }) => {

  return (
    <div>
      {data.map((user, index) => <User key={user._id} index={index} user={user} update={update} remove={remove} />)}
    </div>
  )

}


export default Component