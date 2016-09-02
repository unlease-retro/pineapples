// import 'file?name=[name].[ext]!./shared/util/sw.js'
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './shared/containers/Root'

// library and global styles
import 'normalize.css'
import 'react-select/dist/react-select.css'
import 'styles/app.css'

// react perf tool
if (process.env.NODE_ENV === 'development') window.Perf = require('react-addons-perf')

// register service worker - disabled due to cookies issue https://github.com/w3c/ServiceWorker/issues/707
// if (process.env.NODE_ENV !== 'development' && 'serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js')

const rootEl = document.getElementById('root')

ReactDOM.render(<Root />, rootEl)
