import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Example } from './pages/Example'
import { Home } from './pages/Home'

export function App() {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/example" component={Example} />
      <Redirect exact from="/" to="/home" />
    </Switch>
  )
}
