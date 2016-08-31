/**
  * @desc CSS mixins - for use with inline (JavaScript) styles
*/

/* --------
 * Position
-------- */

const positionAbsolute = {
  position: 'absolute'
}

export const cAlign = Object.assign({}, positionAbsolute, {
  top: '50%',
  left: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
})

export const vAlign = Object.assign({}, positionAbsolute, {
  top: '50%',
  transform: 'translate3d(0, -50%, 0)',
})

export const hAlign = Object.assign({}, positionAbsolute, {
  left: '50%',
  transform: 'translate3d(-50%, 0, 0)',
})

/* --------
 * Grid
-------- */

export const grid = {
  display: 'flex',
  flexWrap: 'wrap',
}

export const cell = {
  flexShrink: 0,
}

/* --------
 * Link
-------- */

export const link = {
  borderBottom: '2px solid transparent',
  paddingBottom: '2px',
  fontWeight: '800',
  fontSize: '14px',
  textTransform: 'uppercase',
  cursor: 'pointer',
}
