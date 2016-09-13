export const STATE_KEY = '@Unlease:pineapples'
export const API = '/api'

// promise action type labels
export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'
export const UI_ACTION = 'ui/'

export const SNACKBAR_DURATION = 5000

// reasons for undelivered pineapple
export const OTHER = 'Other'
export const reasons = [
  'Person isn’t in',
  'Office is currently closed',
  'Address is wrong',
  'Problem with security',
  'Name doesn’t exist / can’t find'
]

export const GOOGLE_MAPS_SCRIPT = {
  id: 'google-maps-api',
  src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBLs5jh33x7asMZsgRwbQmxjL0IIWTRdio'
}
