import React, { PropTypes } from 'react'

const Loader = ({ loaded, children }) => {

  const content = loaded ? children : 'Loading...'

  return (
    <div>
      { content }
    </div>
  )

}

Loader.propTypes = {
  loaded: PropTypes.bool.isRequired
}

Loader.defaultProps = {
  loaded: false
}

export default Loader
