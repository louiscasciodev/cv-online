// Modules
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// Personals Components
import { Home, SignIn } from './components/user/pages'

// MUI Components
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// Creating Project Theme with JSS
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
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const login = () => {
    setisAuthenticated(true)
  }

  return (
    <ThemeProvider theme={louisTheme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/sign-in">
            <SignIn log={login} />
          </Route>
          {isAuthenticated ? (
            <Route path="/home">
              <Home />
            </Route>)
            :
            (<Redirect to={{ pathname: "/sign-in" }} />)
          }
        </Switch>
      </Router>
    </ThemeProvider>
  )
}