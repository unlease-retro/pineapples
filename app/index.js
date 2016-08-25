import React from 'react'
import ReactDOM from 'react-dom'
import Root from './shared/containers/Root'

// library and global styles
import 'normalize.css'
import 'react-select/dist/react-select.css'
import 'styles/app.css'

const rootEl = document.getElementById('root')

ReactDOM.render(<Root />, rootEl)
