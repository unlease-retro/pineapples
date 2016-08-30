/**
  * @desc Storage service - provides an interface for localStorage + sessionStorage
*/

// localStorage
export const getItem = key => JSON.parse(localStorage.getItem(key))
export const setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value))
export const removeItem = key => localStorage.removeItem(key)

// sessionStorage
export const getItemSession = key => JSON.parse(sessionStorage.getItem(key))
export const setItemSession = (key, value) => sessionStorage.setItem(key, JSON.stringify(value))
export const removeItemSession = key => sessionStorage.removeItem(key)
