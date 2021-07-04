import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ROUTES from './routes'

export default function App() {
  return (
    <Router>
      <Switch>
        {ROUTES.map(route => {
          const { path, Component } = route
          return (
            <Route key={path} exact path={path}>
              <Component />
            </Route>
          )
        })}
      </Switch>
    </Router>
  )
}
