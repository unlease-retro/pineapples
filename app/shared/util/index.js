/**
  * @desc Utils - general utility functions
*/

import { REQUEST, SUCCESS, FAILURE, UI_ACTION } from '../constants'

export const getColour = () => `#${Math.floor(Math.random()*16777215).toString(16)}`
export const getCentroid = ([ lat, lng ]) => ({ lat, lng })
export const getPosition = ([ lng, lat ]) => ({ lat, lng }) // 😱
export const getKM = meters => Math.round(meters / 1000)
export const getHoursMins = d => {

  d = Number(d)
  const h = Math.floor(d / 3600)
  const m = Math.floor(d % 3600 / 60)

  const hDisplay = h > 0 ? h + (h === 1 ? ' hour ' : ' hours ') : ''
  const mDisplay = m > 0 ? m + (m === 1 ? ' minute' : ' minutes') : ''

  return hDisplay + mDisplay

}

export const getActionType = type => type.indexOf(REQUEST) >= 0 && REQUEST || type.indexOf(SUCCESS) >= 0 && SUCCESS || type.indexOf(FAILURE) >= 0 && FAILURE || type.indexOf(UI_ACTION) >= 0 && UI_ACTION

export const adjustColour = (colour, amount) => {

  let useHash = false

  if (colour[0] === '#') {

    colour = colour.slice(1)
    useHash = true

  }

  let num = parseInt(colour, 16)

  let r = (num >> 16) + amount

  if (r > 255) r = 255
  else if  (r < 0) r = 0

  let b = ((num >> 8) & 0x00FF) + amount

  if (b > 255) b = 255
  else if  (b < 0) b = 0

  let g = (num & 0x0000FF) + amount

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return `${useHash ? '#' : ''}${(g | (b << 8) | (r << 16)).toString(16)}`

}
