import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from "react-router-dom";
import { Home, SignIn } from './components/user/pages'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/sign-in' />
  )} />
)

const louisTheme = createMuiTheme({
  palette: {
    primary: {
      // bleu marine
      main: '#5E6780',
    },
    secondary: {
      // cyan
      main: '#71C1E8',
    },
    error: {
      // orange
      main: '#F50057',
    }
  },
});

export default () => {
  return (
    <ThemeProvider theme={louisTheme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/sign-in" component={SignIn} />
          {/* <Route exact path="/home" component={Home} /> */}
          <PrivateRoute path='/home' component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}