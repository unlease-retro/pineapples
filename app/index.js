import 'file?name=[name].[ext]!./shared/util/sw.js'
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './shared/containers/Root'

// register service worker
if (process.env.NODE_ENV !== 'development' && 'serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js')

const rootEl = document.getElementById('root')

ReactDOM.render(<Root />, rootEl)
