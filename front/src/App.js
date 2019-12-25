import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home, SignIn } from './components/user/pages'

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/home" component={Home} />
        {/* <Route path="/sign-in" component={SignIn} /> */}
      </Switch>
    </Router>
  )
}