import 'whatwg-fetch'
import { API } from '../constants'

export function get(route) {

  return fetch(`${API}/${route}`)

}

export function post(route, data) {

  return fetch(`${API}/${route}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
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
    body: JSON.stringify(data)
  })

}
