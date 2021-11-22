import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { Providers } from './providers'
import './i18n'

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById('app')
)
