import React, { PropTypes } from 'react'

const Error = ({ message }) => {

  return (
    <div>
      { message }
    </div>
  )

}

Error.propTypes = {
  loaded: PropTypes.string.isRequired
}

Error.defaultProps = {
  message: ''
}

export default Error
