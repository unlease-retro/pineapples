import React from 'react'

const Position = ({ children, position, top, right, bottom, left }) => (
  <div style={{ position, top, right, bottom, left }}>{ children }</div>
)

Position.defaultProps = {
  position: 'absolute',
}

export default Position
