/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import * as serviceWorker from './serviceWorker';

import AdminPanel from './Admin/AdminPanel';
import FourOhFour from './404/404';

const themeApp = createMuiTheme({
  palette: {
    primary: {
      main: '#fce4ec',
      light: '#fff1ff',
      dark: '#c9b2ba',
    },
    secondary: {
      main: '#f8bbd0',
      light: '#ffeeff',
      dark: '#c48b9f',
    },
  },
  typography: {
    fontFamily: [
      'Hind Madurai',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

ReactDOM.render(
  <Router>
    {/* TODO: 404 for Admin panel */}
    <Switch>
      <Route exact path="/AdminPanel/" component={AdminPanel} />
      <Route
        path="/"
        component={() => (
          <ThemeProvider theme={themeApp}>
            <App />
          </ThemeProvider>
        )}
      />
      <Route path="*" component={FourOhFour} />
    </Switch>
  </Router>,

  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
