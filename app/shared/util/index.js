/**
  * @desc Utils - general utility functions
*/

import { REQUEST, SUCCESS, FAILURE } from '../constants'

export const getColour = () => `#${Math.floor(Math.random()*16777215).toString(16)}`
export const getCentroid = ([ lat, lng ]) => ({ lat, lng })
export const getPosition = ([ lng, lat ]) => ({ lat, lng }) // 😱

export const getActionType = type => type.indexOf(REQUEST) >= 0 && REQUEST || type.indexOf(SUCCESS) >= 0 && SUCCESS || type.indexOf(FAILURE) >= 0 && FAILURE
