/**
  * @desc Storage service - provides an interface for localStorage + sessionStorage
*/

export function getItem(key) {

  return JSON.parse(localStorage.getItem(key))

}

export function setItem(key, value) {

  return localStorage.setItem(key, JSON.stringify(value))

}

export function removeItem(key) {

  return localStorage.removeItem(key)

}

export function getItemSession(key) {

  return JSON.parse(sessionStorage.getItem(key))

}

export function setItemSession(key, value) {

  return sessionStorage.setItem(key, JSON.stringify(value))

}

export function removeItemSession(key) {

  return sessionStorage.removeItem(key)

}
