/**
  * @desc API service - provides an interface to common API methods
*/

import 'whatwg-fetch'
import { API } from '../constants'

export function get(route) {

  return fetch(`${API}/${route}`, {
    method: 'GET',
    credentials: 'include'
  })

}

export function post(route, data) {

  return fetch(`${API}/${route}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(data)
  })

}

export function put(route, data) {

  return fetch(`${API}/${route}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(data)
  })

}

export function remove(route, data) {

  return fetch(`${API}/${route}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(data)
  })

}
