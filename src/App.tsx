import React from 'react'
import { useTranslation } from 'react-i18next'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Example } from './pages/Example/Example'
import { ExampleNL } from './pages/Example/ExampleNL'
import { Home } from './pages/Home'

export function App() {
  const { i18n } = useTranslation()

  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/example">
        {i18n.language === 'en' ? <Example /> : <ExampleNL />}
      </Route>
      <Redirect exact from="/" to="/home" />
    </Switch>
  )
}
