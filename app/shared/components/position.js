import React from 'react'

const Position = ({ children, position, top, right, bottom, left, zIndex }) => (
  <div style={{ position, top, right, bottom, left, zIndex }}>{ children }</div>
)

Position.defaultProps = {
  position: 'absolute',
}

export default Position
