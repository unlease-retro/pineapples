// import 'file?name=[name].[ext]!./shared/util/sw.js'
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './shared/containers/Root'

// library and global styles
import 'normalize.css'
import 'react-select/dist/react-select.css'
import 'styles/app.css'

// register service worker - disabled due to cookies issue https://github.com/slightlyoff/ServiceWorker/issues/707
// if (process.env.NODE_ENV !== 'development' && 'serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js')

const rootEl = document.getElementById('root')

ReactDOM.render(<Root />, rootEl)
