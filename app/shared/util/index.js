export const getColour = () => `#${Math.floor(Math.random()*16777215).toString(16)}`
export const getCentroid = ([ lat, lng ]) => ({ lat, lng })
export const getPosition = ([ lng, lat ]) => ({ lat, lng }) // 😱